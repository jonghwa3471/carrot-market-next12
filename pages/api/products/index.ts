import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  if (req.method === "GET") {
    /*     const products = await client.product.findMany({
      include: {
        _count: {
          select: {
            favs: true,
          },
        },
      },
    }); */
    const products = [
      {
        id: 1,
        name: "상품1",
        price: "100",
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
        _count: {
          favs: 7,
        },
      },
      {
        id: 2,
        name: "상품2",
        price: "200",
        description: "상품 예시222",
        image: "xx",
        createdAt: "2025-01-26T08:24:50.545z",
        updatedAt: "2025-01-26T08:24:50.546z",
        user: {
          id: 20,
          phone: "null",
          email: "whdghk3471@naver.com",
          name: "Anonymous",
          avatar: null,
          createdAt: "2022-01-26T08:24:50.545z",
          updatedAt: "2022-01-26T08:24:50.546z",
        },
        _count: {
          favs: 12,
        },
      },
    ];
    res.json({
      ok: true,
      products,
    });
  }
  if (req.method === "POST") {
    const {
      body: { name, price, description, photoId },
      session: { user },
    } = req;
    /*     const product = await client.product.create({
      data: {
        name,
        price: +price,
        description,
        image: photoId,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    }); */
    res.json({
      ok: true,
      product: {
        id: 1,
        name,
        price,
        description,
        image: "xx",
        createdAt: "2025-01-26T08:24:50.545z",
        updatedAt: "2025-01-26T08:24:50.546z",
        user: {
          id: 9,
          phone: "12345",
          email: null,
          name: "Anonymous",
          avatar: null,
          createdAt: "2022-01-26T08:24:50.545z",
          updatedAt: "2022-01-26T08:24:50.546z",
        },
      },
    });
  }
}

export default withApiSession(
  withHandler({ methods: ["GET", "POST"], handler }),
);
