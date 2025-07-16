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
  } = req;
  /*   const purchases = await client.purchase.findMany({
    where: {
      userId: user?.id,
    },
    include: {
      product: {
        include: {
          _count: {
            select: {
              favs: true,
            },
          },
        },
      },
    },
  }); */
  const purchases = [
    {
      id: 5,
      user: {
        id: 7,
        name: "Anonymous",
        avatar: "avatarUrl",
      },
      userId: 7,
      product: {
        id: 1,
        name: "상품1",
        price: "100",
        description: "상품 예시111",
        image: "xx",
        userId: 7,
        createdAt: "2025-01-26T08:24:50.545z",
        updatedAt: "2025-01-26T08:24:50.546z",
        _count: {
          favs: 5,
        },
      },
      productId: 1,
      createdAt: "2025-01-26T08:24:50.545z",
      updatedAt: "2025-01-26T08:24:50.546z",
    },
    {
      id: 5,
      user: {
        id: 7,
        name: "Anonymous",
        avatar: "avatarUrl",
      },
      userId: 7,
      product: {
        id: 1,
        name: "상품2",
        price: "200",
        description: "상품 예시222",
        image: "xx",
        userId: 7,
        createdAt: "2025-01-26T08:24:50.545z",
        updatedAt: "2025-01-26T08:24:50.546z",
        _count: {
          favs: 5,
        },
      },
      productId: 1,
      createdAt: "2025-01-26T08:24:50.545z",
      updatedAt: "2025-01-26T08:24:50.546z",
    },
  ];
  res.json({
    ok: true,
    purchases,
  });
}

export default withApiSession(withHandler({ methods: ["GET"], handler }));
