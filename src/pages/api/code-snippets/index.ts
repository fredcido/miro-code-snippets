import type { NextApiRequest, NextApiResponse } from "next";
import { CreateCodeSnippetSchema } from "~/business/models";
import { extractUser } from "~/server/auth";
import { codeSnippetsService } from "~/server/services/code-snippets";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "POST": {
        const userInfo = await extractUser(req.headers.authorization);
        const boardId = req.headers["x-board-id"] as string;
        const newCodeSnippet = CreateCodeSnippetSchema.parse(req.body);

        const snippet = await codeSnippetsService.create(
          newCodeSnippet,
          userInfo,
          boardId
        );

        return res.json(snippet);
      }
      case "GET": {
        const items = await codeSnippetsService.getAll();
        return res.json(items);
      }
      default:
        return res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
}
