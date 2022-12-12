import { connectDB } from "lib/db";
import { Province } from "models/province.model";
import { DeleteResult, UpdateResult } from "typeorm";

export const findAllProvince = async (): Promise<Province[]> => {
  const provinceRepository = (await connectDB()).getRepository(Province);
  return await provinceRepository.find({ order: { id: "DESC" } });
};

export const findOneProvince = async (id: any): Promise<Province | null> => {
  const provinceRepository = (await connectDB()).getRepository(Province);
  return await provinceRepository.findOne({ where: { id } });
};

export const createProvince = async (name: string): Promise<Province> => {
  const provinceRepository = (await connectDB()).getRepository(Province);
  const province = provinceRepository.create({ name });
  const newProvince = provinceRepository.save(province);
  return newProvince;
};

export const updateProvince = async (id: any, name: string): Promise<UpdateResult> => {
  const provinceRepository = (await connectDB()).getRepository(Province);
  return await provinceRepository.update(id, { name });
};

export const deleteProvince = async (id: any): Promise<DeleteResult> => {
  const provinceRepository = (await connectDB()).getRepository(Province);
  return provinceRepository.delete(id);
};
