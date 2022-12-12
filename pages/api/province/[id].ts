import type { NextApiRequest, NextApiResponse } from "next";
import { deleteProvince, findOneProvince, updateProvince } from "services/province.service";

//localhost:4000/api/province/{id}
export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const {
    query: { id },
    body: { name },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const province = await findOneProvince(id!);
        res.status(200).json(province);
        break;
      } catch (error) {
        res.status(200).json({});
      }
    case "PUT":
      try {
        const result = await updateProvince(id, name);

        if (result.affected === 0) {
          res.status(400).json({ message: "เกิดข้อผิดพลาด" });
        }

        res.status(200).json({ message: "แก้ไขข้อมูลสำเร็จ" });
        break;
      } catch (error) {}
    case "DELETE":
      const result = await deleteProvince(id);
      if (result.affected === 0) {
        res.status(400).json({ message: "เกิดข้อผิดพลาด" });
      }

      res.status(200).json({ message: "ลบข้อมูลสำเร็จ" });
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
