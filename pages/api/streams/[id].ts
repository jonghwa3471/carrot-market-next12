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
    }); */
    const stream = {
      id: 5,
      createdAt: "2025-01-26T08:24:50.545z",
      updatedAt: "2025-01-26T08:24:50.546z",
      name: `iPhone ${id}`,
      description: "brand new",
      price: 220,
      userId: user?.id,
    };
    res.json({
      ok: true,
      stream,
    });
  }
}

export default withApiSession(withHandler({ methods: ["GET"], handler }));
