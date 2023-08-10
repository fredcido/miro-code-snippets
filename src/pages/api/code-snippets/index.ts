import type { NextApiRequest, NextApiResponse } from "next";
import { codeSnippetsController } from "~/server/controllers/code-snippets";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "POST": {
        const snippet = await codeSnippetsController.create(req.body);
        return res.json(snippet);
      }
      case "GET": {
        const items = await codeSnippetsController.getAll();
        return res.json(items);
      }
      default:
        return res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
}
