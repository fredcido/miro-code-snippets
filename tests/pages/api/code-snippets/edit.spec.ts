import { describe, expect, it } from "vitest";
import { createMocks } from "node-mocks-http";

import indexHandler from "~/pages/api/code-snippets/index";
import withIdHandler from "~/pages/api/code-snippets/[id]";
import { createCodePayload, createHttpHeaders } from "~tests/data";
import { type CodeSnippet } from "~/business";
import { prisma } from "~/server/db";
import { clone } from "lodash";

describe("[API] Edit Code Snippet", () => {
  const codeSnippetPayload = createCodePayload();

  it("should deny not authorized when missing JWT", async () => {
    const { req, res } = createMocks({
      method: "PATCH",
      body: codeSnippetPayload,
    });

    req.headers = {
      "Content-Type": "application/json",
      Accepts: "application/json",
    };

    await withIdHandler(req, res);

    expect(res.statusCode).toBe(401);
    expect(res._getJSONData()).toEqual({
      error: "Invalid JWT provided",
    });
  });

  it("should deny not authorized when invalid JWT", async () => {
    const { req, res } = createMocks({
      method: "PATCH",
      body: codeSnippetPayload,
    });

    req.headers = {
      "Content-Type": "application/json",
      Accepts: "application/json",
      authorization: `Bearer blablablabla`,
    };

    await withIdHandler(req, res);

    expect(res.statusCode).toBe(401);
    expect(res._getJSONData()).toEqual({
      error: "Invalid Compact JWS",
    });
  });

  it("should accept edditing only from owned snippets", async () => {
    const { req: postReq, res: postRes } = createMocks({
      method: "POST",
      body: codeSnippetPayload,
    });

    postReq.headers = createHttpHeaders({
      user: "TEST_USER_JOHN",
    });

    await indexHandler(postReq, postRes);
    const createdSnippet = postRes._getJSONData() as CodeSnippet;

    const { req, res } = createMocks({
      method: "PATCH",
      body: codeSnippetPayload,
      query: {
        id: createdSnippet.id,
      },
    });

    req.headers = createHttpHeaders();
    await withIdHandler(req, res);

    expect(res.statusCode).toBe(403);
    expect(res._getJSONData()).toEqual({
      error: "Only owners should have access to access snippet",
    });
  });

  it("should edit snippet", async () => {
    const { req: postReq, res: postRes } = createMocks({
      method: "POST",
      body: codeSnippetPayload,
    });

    postReq.headers = createHttpHeaders();

    await indexHandler(postReq, postRes);
    const createdSnippet = postRes._getJSONData() as CodeSnippet;

    const updatePayload = clone(createdSnippet);

    updatePayload.name = "Title changed";
    updatePayload.code = 'console.log("Totally different code")';
    updatePayload.icon = "star";

    const { req, res } = createMocks({
      method: "PATCH",
      body: updatePayload,
      query: {
        id: createdSnippet.id,
      },
    });

    req.headers = postReq.headers;
    await withIdHandler(req, res);

    expect(res.statusCode).toBe(200);

    const dbSource = await prisma.snippet.findFirstOrThrow({
      where: {
        code: updatePayload.code,
        name: updatePayload.name,
        icon: updatePayload.icon,
      },
    });

    const changedSnippet = res._getJSONData() as CodeSnippet;

    expect(dbSource).not.toBeNull();

    expect(changedSnippet.name).toBe(updatePayload.name);
    expect(changedSnippet.code).toBe(updatePayload.code);
    expect(changedSnippet.icon).toBe(updatePayload.icon);

    expect(changedSnippet.owner).toBe("USER");
    expect(changedSnippet.shareConfig).toEqual(
      expect.arrayContaining([
        {
          sourceType: "USER",
          identifier: "TEST_USER",
        },
      ])
    );
  });
});
