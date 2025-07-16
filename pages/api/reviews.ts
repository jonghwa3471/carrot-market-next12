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
  /*   const reviews = await client.review.findMany({
    where: {
      createdForId: user?.id,
    },
    include: {
      createdBy: {
        select: {
          id: true,
          name: true,
          avatar: true,
        },
      },
    },
  }); */
  const reviews = [
    {
      id: 1,
      createdAt: "2022-01-26T08:24:50.545z",
      updatedAt: "2022-01-26T08:24:50.546z",
      createdBy: {
        id: 1123,
        name: "Jonghyeon",
        avatar: "avatarUrl",
      },
      createdById: 4,
      createdFor: {
        id: +user?.id!,
        name: "Anonymous",
        avatar: "avatarUrl",
      },
      createdForId: +user?.id!,
      review: "This is the review 1",
      score: 4,
    },
    {
      id: 2,
      createdAt: "2022-01-26T08:24:50.545z",
      updatedAt: "2022-01-26T08:24:50.546z",
      createdBy: {
        id: 1234,
        name: "Taehyeon",
        avatar: "avatarUrl",
      },
      createdById: 2,
      createdFor: {
        id: +user?.id!,
        name: "Anonymous",
        avatar: "avatarUrl",
      },
      createdForId: +user?.id!,
      review: "This is the review 2",
      score: 4,
    },
  ];
  res.json({
    ok: true,
    reviews,
  });
}

export default withApiSession(withHandler({ methods: ["GET"], handler }));
