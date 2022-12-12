import { Province } from "models/province.model";
import type { NextApiRequest, NextApiResponse } from "next";
import { findAllProvince } from "services/province.service";

//localhost:4000/api/province
export default async function handler(req: NextApiRequest, res: NextApiResponse<Province[]>) {
  const provinces = await findAllProvince();
  res.status(200).json(provinces);
}
