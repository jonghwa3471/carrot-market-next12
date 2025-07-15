import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  const {
    query: { id },
    session: { user },
    body: { answer },
  } = req;
  if (id) {
    /*     const newAnswer = await client.answer.create({
      data: {
        user: {
          connect: {
            id: user?.id,
          },
        },
        post: {
          connect: {
            id: +id,
          },
        },
        answer,
      },
    }); */
  }
  const newAnswer = {
    id: 79,
    createdAt: "2022-01-26T08:24:50.545z",
    updatedAt: "2022-01-26T08:24:50.546z",
    user: {
      id: user?.id,
      name: "Jonghyeon",
      avatar: "avatarUrl",
    },
    userId: user?.id,
    answer,
  };
  res.json({
    ok: true,
    answer: newAnswer,
  });
}

export default withApiSession(withHandler({ methods: ["POST"], handler }));
