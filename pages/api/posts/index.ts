import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  const {
    body: { question },
    session: { user },
  } = req;
  /*   const post = await client.post.create({
    data: {
      question,
      user: {
        connect: {
          id: user?.id,
        },
      },
    },
  }); */
  const post = {
    id: 1,
    createdAt: "2022-01-26T08:24:50.545z",
    updatedAt: "2022-01-26T08:24:50.546z",
    user: user,
    userId: user?.id,
    question,
  };
  res.json({
    ok: true,
    post,
    profile: {
      id: 9,
      phone: "12345",
      email: null,
      name: "Anonymous",
      avatar: null,
      createdAt: "2022-01-26T08:24:50.545z",
      updatedAt: "2022-01-26T08:24:50.546z",
    },
  });
}

export default withApiSession(withHandler({ methods: ["POST"], handler }));
