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
    /*     const post = await client.post.findUnique({
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
        _count: {
          select: {
            answers: true,
            wonderings: true,
          },
        },
        answers: {
          select: {
            answer: true,
            id: true,
            user: {
              select: {
                id: true,
                name: true,
                avatar: true,
              },
            },
          },
        },
      },
    }); */
  }
  const post = {
    id: 1,
    createdAt: "2022-01-26T08:24:50.545z",
    updatedAt: "2022-01-26T08:24:50.546z",
    user: {
      id: user?.id,
      name: "Jonghwa",
      avatar: "avatarUrl",
    },
    question: `This is question ${id}`,
    _count: {
      answers: 1,
      wonderings: 14,
    },
    answers: [
      {
        id: 1,
        createdAt: "2022-01-26T08:24:50.545z",
        updatedAt: "2022-01-26T08:24:50.546z",
        user: {
          id: 4,
          name: "Jonghyeon",
          avatar: "avatarUrl",
        },
        userId: 4,
        answer: "This is answer 1 for this question",
      },
      {
        id: 2,
        createdAt: "2022-01-26T08:24:50.545z",
        updatedAt: "2022-01-26T08:24:50.546z",
        user: {
          id: 2,
          name: "Taehyeon",
          avatar: "avatarUrl",
        },
        userId: 2,
        answer: "This is answer 2 for this question",
      },
    ],
  };
  res.json({
    ok: true,
    post,
  });
}

export default withApiSession(withHandler({ methods: ["GET"], handler }));
