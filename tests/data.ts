import { merge } from "lodash";
import jsonwebtoken from "jsonwebtoken";

import {
  type CreateCodeSnippet,
  type CodeSnippet,
  type UserInfo,
} from "~/business";
import { env } from "~/env.mjs";

export const createCodePayload = (
  opts: Partial<CreateCodeSnippet> = {}
): CreateCodeSnippet =>
  merge(
    {
      name: "Test code snippet",
      code: 'console.log("Hey")',
      status: "PUBLISHED",
      icon: "user",
    },
    opts
  );

export const createCodeSnippet = (
  opts: Partial<CodeSnippet> = {}
): CodeSnippet =>
  merge(
    createCodePayload({
      name: "Test code snippet",
      code: 'console.log("Hey")',
      status: "PUBLISHED",
      icon: "user",
    }),
    {
      id: "test-code-id",
      shareConfig: [],
      owner: "OTHER",
      visibility: "PROTECTED",
      createdAt: "2023-01-01T10:10",
      updatedAt: "2023-01-01T14:45",
    },
    opts
  );

export const codeSnippets: CodeSnippet[] = [
  createCodeSnippet({
    id: "102030",
    name: "My first script",
    owner: "USER",
  }),
  createCodeSnippet({
    id: "203040",
    name: "My second script",
    owner: "USER",
  }),
  createCodeSnippet({
    id: "304050",
    name: "My third script",
    owner: "USER",
  }),
];

export const createUser = (opts: Partial<UserInfo> = {}) =>
  merge(
    {
      user: "TEST_USER",
      team: "TEST_TEAM",
    },
    opts
  );

export const createHttpHeaders = (opts: Partial<UserInfo> = {}) => {
  const jwtPayload = createUser(opts);
  const jwt = jsonwebtoken.sign(jwtPayload, env.MIRO_CLIENT_SECRET);

  const headers = {
    "Content-Type": "application/json",
    Accepts: "application/json",
    authorization: `Bearer ${jwt}`,
    "x-board-id": "TEST_BOARD",
  };

  return headers;
};