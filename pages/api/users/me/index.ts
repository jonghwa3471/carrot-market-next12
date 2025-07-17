import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  if (req.method === "GET") {
    /* const profile = await client.user.findUnique({
    where: {
      id: req.session.user?.id,
    },
  }); */
    res.json({
      ok: true,
      profile: {
        id: 9,
        phone: "12345",
        email: null,
        name: "Anonymous",
        avatar: null,
        createdAt: "2022-01-26T08:24:50.545z",
        updatedAt: "2022-01-26T08:24:50.546z",
      },
    });
  }
  if (req.method === "POST") {
    const {
      body: { email, phone, name },
      session: { user },
    } = req;
    /*     const currentUser = await client.user.findUnique({
      where: {
        id: user?.id,
      },
    }); */
    const currentUser = {
      id: 9,
      phone: "12345",
      email: null,
      name: "Anonymous",
      avatar: null,
      createdAt: "2022-01-26T08:24:50.545z",
      updatedAt: "2022-01-26T08:24:50.546z",
    };
    if (email && email !== currentUser?.email) {
      /*       const alreadyExists = Boolean(
        await client.user.findUnique({
          where: {
            email,
          },
          select: {
            id: true,
          },
        }),
      ); */
      const alreadyExists = false;
      if (alreadyExists) {
        return res.json({
          ok: false,
          error: "Email already taken.",
        });
      }
      /*       await client.user.update({
        where: {
          id: user?.id,
        },
        data: {
          email,
        },
      }); */
      res.json({ ok: true });
    }
    if (phone && phone !== currentUser?.phone) {
      /*       const alreadyExists = Boolean(
        await client.user.findUnique({
          where: {
            phone,
          },
          select: {
            id: true,
          },
        }),
      ); */
      const alreadyExists = false;
      if (alreadyExists) {
        return res.json({
          ok: false,
          error: "Phone already in use.",
        });
      }
      /*       await client.user.update({
        where: {
          id: user?.id,
        },
        data: {
          phone,
        },
      }); */
      res.json({ ok: true });
    }
    if (name) {
      /*       await client.user.update({
        where: {
          id: user?.id,
        },
        data: {
          name,
        },
      }); */
    }
    res.json({ ok: true });
  }
}

export default withApiSession(
  withHandler({ methods: ["GET", "POST"], handler }),
);
