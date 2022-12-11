// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectDB } from "lib/db";
import { Province } from "models/province.model";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

//localhost:4000/api/hello
export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const provinceRepository = (await connectDB()).getRepository(Province);
  const provinces = await provinceRepository.find();

  res.status(200).json(provinces);
}
