import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  const {
    body: { email, phone, name, avatarId },
    session: { user },
  } = req;
  if (req.method === "GET") {
    /* const profile = await client.user.findUnique({
    where: {
      id: req.session.user?.id,
    },
  }); */
    if (user?.id) {
      res.json({
        ok: true,
        profile: {
          id: +user?.id,
          phone: "12345",
          email: null,
          name: "Anonymous",
          avatar: null,
          createdAt: "2022-01-26T08:24:50.545z",
          updatedAt: "2022-01-26T08:24:50.546z",
        },
      });
    }
  }
  if (req.method === "POST") {
    /*     const currentUser = await client.user.findUnique({
      where: {
        id: user?.id,
      },
    }); */
    const currentUser = {
      id: user?.id,
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
    if (avatarId) {
      /*       await client.user.update({
        where: {
          id: user?.id,
        },
        data: {
          avatar: avatarId,
        },
      }); */
    }
    res.json({ ok: true });
  }
}

export default withApiSession(
  withHandler({ methods: ["GET", "POST"], handler }),
);
