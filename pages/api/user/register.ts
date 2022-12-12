import type { NextApiRequest, NextApiResponse } from "next";
import { createProvince } from "services/province.service";
import { findByEmailUser, registerUser } from "services/user.service";

//localhost:4000/api/user/register
export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const {
    body: { fullname, email, password },
    method,
  } = req;

  switch (method) {
    case "POST":
      try {
        const payload = { fullname, email, password };

        //check exsit
        const userExsit = await findByEmailUser(email);
        if (userExsit) {
          res.status(400).json({ message: "มีอีเมลนี้ในระบบแล้ว" });
        }

        const result = await registerUser(payload);
        res.status(201).json({ message: "ลงทะเบียนสำเร็จ", data: result });
      } catch (error) {}
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
