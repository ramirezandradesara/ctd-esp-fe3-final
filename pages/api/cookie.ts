import { NextApiRequest, NextApiResponse } from "next";

const handler = async (res: NextApiResponse, req: NextApiRequest) => {
  res.setHeader(
    "set-cookie",
    "Access=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax; HttpOnly"
  );
  res.status(200).json([]);
};

export default handler;
