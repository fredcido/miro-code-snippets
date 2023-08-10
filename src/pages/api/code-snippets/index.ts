import type { NextApiRequest, NextApiResponse } from "next";
import { codeSnippetsService } from "~/server/services/code-snippets";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "POST": {
        const snippet = await codeSnippetsService.create(req.body);
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
