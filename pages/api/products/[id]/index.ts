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
      id: +id,
      name: `상품${id}`,
      price: "100",
      description: `상품 예시${id}`,
      image: "xx",
      createdAt: "2025-01-26T08:24:50.545z",
      updatedAt: "2025-01-26T08:24:50.546z",
      user: {
        id: 2 * +id,
        phone: "12345",
        email: null,
        name: "Anonymous",
        avatar: null,
        createdAt: "2022-01-26T08:24:50.545z",
        updatedAt: "2022-01-26T08:24:50.546z",
      },
    };
    const terms = product.name.split(" ").map((word) => ({
      name: {
        contains: word,
      },
    }));
    /*     const relatedProducts = await client.product.findMany({
      where: {
        OR: terms,
        AND: {
          id: {
            not: product?.id,
          },
        },
      },
    }); */
    const relatedProducts = [
      {
        id: 3,
        name: "상품3",
        price: "300",
        description: "상품 예시333",
        image: "xx",
        createdAt: "2025-01-26T08:24:50.545z",
        updatedAt: "2025-01-26T08:24:50.546z",
        user: {
          id: 39,
          phone: "1234567",
          email: null,
          name: "Anonymous",
          avatar: null,
          createdAt: "2022-01-26T08:24:50.545z",
          updatedAt: "2022-01-26T08:24:50.546z",
        },
      },
      {
        id: 4,
        name: "상품4",
        price: "400",
        description: "상품 예시444",
        image: "xx",
        createdAt: "2025-01-26T08:24:50.545z",
        updatedAt: "2025-01-26T08:24:50.546z",
        user: {
          id: 49,
          phone: "123456789",
          email: null,
          name: "Anonymous",
          avatar: null,
          createdAt: "2022-01-26T08:24:50.545z",
          updatedAt: "2022-01-26T08:24:50.546z",
        },
      },
      {
        id: 5,
        name: "상품5",
        price: "300",
        description: "상품 예시555",
        image: "xx",
        createdAt: "2025-01-26T08:24:50.545z",
        updatedAt: "2025-01-26T08:24:50.546z",
        user: {
          id: 59,
          phone: "123456712",
          email: null,
          name: "Anonymous",
          avatar: null,
          createdAt: "2022-01-26T08:24:50.545z",
          updatedAt: "2022-01-26T08:24:50.546z",
        },
      },
    ];
    /*     const isLiked = Boolean(
      await client.fav.findFirst({
        where: {
          productId: product?.id,
          userId: user?.id,
        },
        select: {
          id: true,
        },
      }),
    ); */
    const isLiked = true;
    res.json({ ok: true, product, isLiked, relatedProducts });
  }
}

export default withApiSession(withHandler({ methods: ["GET"], handler }));
