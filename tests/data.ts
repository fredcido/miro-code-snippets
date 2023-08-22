import { merge } from "lodash";
import { type MiroContextData } from "~/components/MiroContext";

import { type CodeSnippet } from "~/business";

export const createMiroData = (
  opts: Partial<MiroContextData> = {}
): MiroContextData =>
  merge(
    {
      boardInfo: {
        id: "testBoardInfo",
        createdAt: "2023-01-01T10:10",
        updatedAt: "2023-01-01T14:45",
      },
      userInfo: {
        jwt: "testJWT",
        team: "testTeamId",
        user: "testUserId",
      },
    },
    opts
  );

export const createCodeSnippet = (
  opts: Partial<CodeSnippet> = {}
): CodeSnippet =>
  merge(
    {
      id: "test-code-id",
      name: "Test code snippet",
      code: 'console.log("Hey")',
      owner: "OTHER",
      status: "PUBLISHED",
      visibility: "PROTECTED",
      createdAt: "2023-01-01T10:10",
      updatedAt: "2023-01-01T14:45",
      icon: "user",
      shareConfig: [],
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
