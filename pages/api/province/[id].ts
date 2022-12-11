import type { NextApiRequest, NextApiResponse } from "next";

//localhost:4000/api/province/{id}
export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      res.status(200).json({ id: `Province ${id}` });
      break;
    case "PUT":
      const {
        body: { name },
      } = req;

      res.status(200).json({ id: `Update ${name}` });
      break;
    case "DELETE":
      res.status(200).json({ id: `Delete ${id}` });
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
