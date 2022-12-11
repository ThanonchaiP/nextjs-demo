import type { NextApiRequest, NextApiResponse } from "next";

//localhost:4000/api/province/create
export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const {
    body: { name },
    method,
  } = req;

  switch (method) {
    case "POST":
      res.status(200).json({ id: `Create Province ${name}` });
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
