import type { NextApiRequest, NextApiResponse } from "next";
import { codeSnippetsService } from "~/server/services/code-snippets";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;
  try {
    switch (req.method) {
      case "PUT": {
        const snippet = await codeSnippetsService.update(req.body);
        return res.json(snippet);
      }
      case "GET": {
        const item = await codeSnippetsService.getById(id);
        return res.json(item);
      }
      default:
        return res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
}
