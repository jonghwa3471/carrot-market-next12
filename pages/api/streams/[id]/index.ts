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
  } = req;
  if (id) {
    /*     const stream = await client.stream.findUnique({
      where: {
        id: +id,
      },
      include: {
        messages: {
          select: {
            id: true,
            message: true,
            user: {
              select: {
                avatar: true,
                id: true,
              },
            },
          },
        },
      },
    }); */
    const stream = {
      id: 5,
      createdAt: "2025-01-26T08:24:50.545z",
      updatedAt: "2025-01-26T08:24:50.546z",
      name: `iPhone ${id}`,
      description: "brand new",
      price: 220,
      userId: user?.id,
      messages: [
        {
          id: 11,
          message: "Hi how much are you selling them for?",
          user: {
            avatar: "avatarUrl",
            id: 78,
          },
        },
        {
          id: 21,
          message: "I want ￦20,000",
          user: {
            avatar: "avatarUrl",
            id: 12345,
          },
        },
        {
          id: 31,
          message: "미쳤어",
          user: {
            avatar: "avatarUrl",
            id: 78,
          },
        },
      ],
      cloudflareId: 1,
      cloudflareUrl: "cloudflareUrl",
      cloudflareKey: "cloudflareKey",
    };
    const isOwner = stream?.userId === user?.id;
    if (stream && !isOwner) {
      stream.cloudflareKey = "xxxxx";
      stream.cloudflareUrl = "xxxxx";
    }
    res.json({
      ok: true,
      stream,
    });
  }
}

export default withApiSession(withHandler({ methods: ["GET"], handler }));
