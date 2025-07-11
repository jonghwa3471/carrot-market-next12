import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";
import { connect } from "http2";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  const {
    query: { id },
    session: { user },
  } = req;
  if (id) {
    /*     const alreadyExists = await client.wondering.findFirst({
      where: {
        userId: user?.id,
        postId: +id,
      },
      select: {
        id: true,
      },
    });
    if (alreadyExists) {
      await client.wondering.delete({
        where: {
          id: alreadyExists.id,
        },
      });
    } else {
      await client.wondering.create({
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
        },
      });
    } */
  }
  res.json({
    ok: true,
  });
}

export default withApiSession(withHandler({ methods: ["POST"], handler }));
