import type { NextApiRequest, NextApiResponse } from "next";

//localhost:4000/api/province
export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  res.status(200).json({ message: "provinces" });
}
