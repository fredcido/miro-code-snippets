import { describe, expect, it } from "vitest";
import { createMocks } from "node-mocks-http";

import indexHandler from "~/pages/api/code-snippets/index";
import { createHttpHeaders } from "~tests/data";

describe("[API] List Code Snippets", () => {
  it("should deny not authorized when missing JWT", async () => {
    const { req, res } = createMocks({
      method: "GET",
    });

    req.headers = createHttpHeaders();

    await indexHandler(req, res);

    expect(res.statusCode).toBe(403);
    expect(res._getJSONData()).toEqual({
      error: "No user is yet allowed to see all the snippets",
    });
  });
});
