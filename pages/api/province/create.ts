import type { NextApiRequest, NextApiResponse } from "next";
import { createProvince } from "services/province.service";

//localhost:4000/api/province/create
export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const {
    body: { name },
    method,
  } = req;

  switch (method) {
    case "POST":
      try {
        const result = await createProvince(name);
        res.status(200).json({ message: "Created", data: result });
        break;
      } catch (error) {
        res.status(400).json({ message: "Failed" });
      }
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
