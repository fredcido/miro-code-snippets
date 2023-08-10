import type { NextApiRequest, NextApiResponse } from "next";
import { codeSnippetsController } from "~/server/controllers/code-snippets";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;
  try {
    switch (req.method) {
      case "PUT": {
        const snippet = await codeSnippetsController.update(req.body);
        return res.json(snippet);
      }
      case "GET": {
        const item = await codeSnippetsController.getById(id);
        return res.json(item);
      }
      default:
        return res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
}
