import { connectDB } from "lib/db";
import { Province } from "models/province.model";

export const findAllProvince = async (): Promise<Province[]> => {
  const userRepository = await (await connectDB()).getRepository(Province);
  return await userRepository.find({ order: { id: "DESC" } });
};
