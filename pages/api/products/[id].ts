import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  const { id } = req.query;
  if (id) {
    /*     const product = await client.product.findUnique({
      where: {
        id: +id,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
      },
    }); */
    const product = {
      id: 1,
      name: "상품1",
      price: "100$",
      description: "상품 예시111",
      image: "xx",
      createdAt: "2025-01-26T08:24:50.545z",
      updatedAt: "2025-01-26T08:24:50.546z",
      user: {
        id: 19,
        phone: "12345",
        email: null,
        name: "Anonymous",
        avatar: null,
        createdAt: "2022-01-26T08:24:50.545z",
        updatedAt: "2022-01-26T08:24:50.546z",
      },
    };
    res.json({ ok: true, product });
  }
}

export default withApiSession(withHandler({ methods: ["GET"], handler }));
