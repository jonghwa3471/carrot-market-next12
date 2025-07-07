import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
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

export default withApiSession(withHandler({ methods: ["GET"], handler }));
