import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  const {
    session: { user },
    body: { name, price, description },
  } = req;
  if (req.method === "POST") {
    /*     const stream = await client.stream.create({
      data: {
        name,
        price,
        description,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    }); */
    const stream = {
      id: 5,
      createdAt: "2025-01-26T08:24:50.545z",
      updatedAt: "2025-01-26T08:24:50.546z",
      name,
      description,
      price,
      userId: user?.id,
    };
    res.json({
      ok: true,
      stream,
    });
  }
  if (req.method === "GET") {
    // const streams = await client.stream.findMany();
    const streams = [
      {
        id: 16,
        createdAt: "2025-01-26T08:24:50.545z",
        updatedAt: "2025-01-26T08:24:50.546z",
        name: "iPhone 16",
        description: "brand new",
        price: 220,
        userId: user?.id,
      },
      {
        id: 14,
        createdAt: "2025-01-26T08:24:50.545z",
        updatedAt: "2025-01-26T08:24:50.546z",
        name: "iPhone 14",
        description: "older one",
        price: 20,
        userId: user?.id,
      },
      {
        id: 12,
        createdAt: "2025-01-26T08:24:50.545z",
        updatedAt: "2025-01-26T08:24:50.546z",
        name: "iPhone 12",
        description: "sucks",
        price: 2,
        userId: user?.id,
      },
    ];
    res.json({ ok: true, streams });
  }
}

export default withApiSession(
  withHandler({ methods: ["GET", "POST"], handler }),
);
