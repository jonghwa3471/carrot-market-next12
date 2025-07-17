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
    body,
    session: { user },
  } = req;
  if (id) {
    /*     const message = await client.message.create({
      data: {
        message: body.message,
        user: {
          connect: {
            id: user?.id,
          },
        },
        stream: {
          connect: {
            id: +id,
          },
        },
      },
    }); */
    const message = {
      id: 5,
      createdAt: "2025-01-26T08:24:50.545z",
      updatedAt: "2025-01-26T08:24:50.546z",
      message: body.message,
      userId: user?.id,
      streamId: +id,
    };
    res.json({
      ok: true,
      message,
    });
  }
}

export default withApiSession(withHandler({ methods: ["POST"], handler }));
