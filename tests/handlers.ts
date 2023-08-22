import { rest } from "msw";
import { codeSnippets } from "./data";

export const api = (url: string) => `http://localhost/api${url}`;

export const handlers = [
  rest.get(api("/code-snippets/mine"), (req, res, ctx) => {
    return res(ctx.json(codeSnippets));
  }),
];
