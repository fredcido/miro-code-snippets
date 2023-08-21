import { type NextApiRequest, type NextApiResponse } from "next";
import { createRouter } from "next-connect";
import { CreateCodeSnippetSchema } from "~/business/models";
import { extractUser, withAuth } from "~/server/auth";
import { onError } from "~/server/middleware";
import { shareService, codeSnippetsService } from "~/server/services";

const router = createRouter<NextApiRequest, NextApiResponse>();

router
  .use(withAuth)
  .post(async (req, res) => {
    const boardId = req.headers["x-board-id"] as string;
    const userInfo = await extractUser(req.headers.authorization);

    const currentSnippet = await codeSnippetsService.getById(id, userInfo);

    if (currentSnippet.owner === "USER") {
      return res.status(400).json({
        message: "User is the owner of the script",
      });
    }

    const snippet = await codeSnippetsService.create(
      newCodeSnippet,
      userInfo,
      boardId
    );

    return res.json(snippet);
  })
  .patch(async (req, res) => {
    const id = req.query.id as string;
    await codeSnippetsService.delete(id);
    return res.json({});
  });

export default router.handler({
  onError,
});
