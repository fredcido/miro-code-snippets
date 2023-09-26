import { describe, expect, it } from "vitest";
import { createMocks } from "node-mocks-http";

import indexHandler from "~/pages/api/code-snippets/index";
import { createCodePayload, createHttpHeaders } from "~tests/data";
import { prisma } from "~/server/db";
import { type CodeSnippet } from "~/business";

describe("[API] Create Code Snippet", () => {
  const codeSnippetPayload = createCodePayload();

  it("should deny not authorized when missing JWT", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: codeSnippetPayload,
    });

    req.headers = {
      "Content-Type": "application/json",
      Accepts: "application/json",
    };

    await indexHandler(req, res);

    expect(res.statusCode).toBe(401);
    expect(res._getJSONData()).toEqual({
      error: "Invalid JWT provided",
    });
  });

  it("should deny not authorized when invalid JWT", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: codeSnippetPayload,
    });

    req.headers = {
      "Content-Type": "application/json",
      Accepts: "application/json",
      authorization: `Bearer blablablabla`,
    };

    await indexHandler(req, res);

    expect(res.statusCode).toBe(401);
    expect(res._getJSONData()).toEqual({
      error: "Invalid Compact JWS",
    });
  });

  it("should deny not authorized missing boardID", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: codeSnippetPayload,
    });

    req.headers = createHttpHeaders();
    delete req.headers["x-board-id"];

    await indexHandler(req, res);

    expect(res.statusCode).toBe(400);
    expect(res._getJSONData()).toEqual({
      error: "Missing x-board-id header",
    });
  });

  it("should save code snippet", async () => {
    const predicate = {
      $and: {
        type: "image",
      },
    };
    const snippetWithPredicate = createCodePayload({
      predicate,
    });
    const { req, res } = createMocks({
      method: "POST",
      body: snippetWithPredicate,
    });

    req.headers = createHttpHeaders();
    await indexHandler(req, res);

    const dbSource = await prisma.snippet.findFirstOrThrow({
      where: {
        code: codeSnippetPayload.code,
        name: codeSnippetPayload.name,
      },
    });

    const createdSnippet = res._getJSONData() as CodeSnippet;

    expect(dbSource).not.toBeNull();
    expect(res.statusCode).toBe(201);
    expect(createdSnippet).toMatchObject(codeSnippetPayload);

    expect(createdSnippet.owner).toBe("USER");
    expect(createdSnippet.shareConfig).toEqual(
      expect.arrayContaining([
        {
          sourceType: "USER",
          identifier: "TEST_USER",
        },
      ])
    );

    expect(createdSnippet.predicate).toMatchObject(predicate);
  });
});
