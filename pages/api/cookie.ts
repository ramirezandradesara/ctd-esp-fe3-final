import { NextApiResponse } from "next";

export const handler = async (res: NextApiResponse) => {
  res.setHeader(
    "set-cookie",
    "Access=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax; HttpOnly"
  );
  res.status(200).json([]);
};
