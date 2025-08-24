import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  if (req.method === "POST") {
    const {
      body: { question, latitude, longitude },
      session: { user },
    } = req;
    /*     const post = await client.post.create({
      data: {
        question,
        latitude,
        longitude,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    }); */
    const post = {
      id: 1,
      createdAt: "2022-01-26T08:24:50.545z",
      updatedAt: "2022-01-26T08:24:50.546z",
      user: user,
      userId: user?.id,
      question,
      latitude,
      longitude,
    };

    await res.revalidate("/community");

    res.json({
      ok: true,
      post,
    });
  }
  if (req.method === "GET") {
    const {
      query: { latitude, longitude },
    } = req;
    const parsedLatitude = parseFloat(latitude?.toString()!);
    const parsedLongitude = parseFloat(longitude?.toString()!);
    /*     const posts = await client.post.findMany({
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
            wonderings: true,
            answers: true,
          },
        },
      },
      where: {
        latitude: {
          gte: parsedLatitude - 0.01,
          lte: parsedLatitude + 0.01,
        },
        longitude: {
          gte: parsedLongitude - 0.01,
          lte: parsedLongitude + 0.01,
        },
      },
    }); */
    const posts = [
      {
        id: 1,
        createdAt: "2022-01-26T08:24:50.545z",
        updatedAt: "2022-01-26T08:24:50.546z",
        latitude: 35.964036540679764,
        longitude: 126.71687550586978,
        user: {
          id: 4,
          name: "userName",
          avatar: "",
        },
        userId: 123123,
        question: "Question1",
        _count: {
          wondering: 7,
          answers: 2,
        },
      },
      {
        id: 2,
        createdAt: "2022-01-26T08:24:50.545z",
        updatedAt: "2022-01-26T08:24:50.546z",
        latitude: 35.964036540679764,
        longitude: 126.71687550586978,
        user: {
          id: 4,
          name: "userName",
          avatar: "",
        },
        userId: 234,
        question: "Question2",
        _count: {
          wondering: 7,
          answers: 2,
        },
      },
      {
        id: 3,
        createdAt: "2022-01-26T08:24:50.545z",
        updatedAt: "2022-01-26T08:24:50.546z",
        latitude: 35.964036540679764,
        longitude: 126.71687550586978,
        user: {
          id: 4,
          name: "userName",
          avatar: "",
        },
        userId: 5345,
        question: "Question3",
        _count: {
          wondering: 7,
          answers: 2,
        },
      },
      {
        id: 4,
        createdAt: "2022-01-26T08:24:50.545z",
        updatedAt: "2022-01-26T08:24:50.546z",
        latitude: 36.964036540679764,
        longitude: 127.71687550586978,
        user: {
          id: 4,
          name: "userName",
          avatar: "",
        },
        userId: 45645645,
        question: "Question4",
        _count: {
          wondering: 7,
          answers: 2,
        },
      },
    ];

    res.json({
      ok: true,
      posts,
    });
  }
}

export default withApiSession(
  withHandler({ methods: ["GET", "POST"], handler }),
);
