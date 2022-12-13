import { connectDB } from "lib/db";
import { Blog } from "models/blog.model";

export const findAllBlog = async (page = 1, pageSize = 3) => {
  const blogRepository = (await connectDB()).getRepository(Blog);
  return await blogRepository.find({
    select: {
      user: {
        fullname: true,
      },
    },
    relations: {
      user: true,
    },
    skip: (page - 1) * pageSize,
    take: pageSize,
  });
};

export const countBlog = async () => {
  const blogRepository = (await connectDB()).getRepository(Blog);
  return await blogRepository.count();
};
