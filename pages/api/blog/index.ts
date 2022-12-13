import { Blog } from "models/blog.model";
import type { NextApiRequest, NextApiResponse } from "next";
import { countBlog, findAllBlog } from "services/blog.service";

//localhost:4000/api/blog
export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const {
    query: { page, pageSize },
  } = req;

  const result = await findAllBlog(Number(page), Number(pageSize));
  const countRecord = await countBlog();
  res.status(200).json({
    data: result,
    total: countRecord,
  });
}
