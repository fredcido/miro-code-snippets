import { describe, expect, it, beforeEach } from "vitest";
import { createMocks } from "node-mocks-http";

import indexHandler from "~/pages/api/code-snippets/index";
import withIdHandler from "~/pages/api/code-snippets/[id]";
import { createCodePayload, createHttpHeaders } from "~tests/data";
import { type CodeSnippet } from "~/business";

describe("[API] Get Code Snippet", () => {
  const codeSnippetPayload = createCodePayload();
  let existingSnippet: CodeSnippet;

  beforeEach(async () => {
    const { req: postReq, res: postRes } = createMocks({
      method: "POST",
      body: codeSnippetPayload,
    });

    postReq.headers = createHttpHeaders();

    await indexHandler(postReq, postRes);
    existingSnippet = postRes._getJSONData() as CodeSnippet;
  });

  it("should deny not authorized when missing JWT", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        id: existingSnippet.id,
      },
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
      method: "GET",
      query: {
        id: existingSnippet.id,
      },
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

  it("should accept viewing only from owned snippets", async () => {
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
      method: "GET",
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

  it("should get snippet", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        id: existingSnippet.id,
      },
    });

    req.headers = createHttpHeaders();
    await withIdHandler(req, res);

    expect(res.statusCode).toBe(200);
    const getCodeSnippet = res._getJSONData() as CodeSnippet;

    expect(getCodeSnippet).toMatchObject(existingSnippet);
  });
});
