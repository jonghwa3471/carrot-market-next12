import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  console.log(req.session);
  const { token } = req.body;
  const exists = client.token.findUnique({
    where: {
      payload: token,
    },
  });
  if (!exists) res.status(404).end();
  req.session.user = {
    id: exists?.userId,
  };
  await req.session.save();
  res.status(200).end();
}

export default withIronSessionApiRoute(withHandler("POST", handler), {
  cookieName: "carrotsession",
  password: "1231237712983719238719283719287873",
});
