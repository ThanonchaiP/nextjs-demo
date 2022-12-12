import * as argon2 from "argon2";
import { connectDB } from "lib/db";
import { User } from "models/user.model";

export const findByEmailUser = async (email: string): Promise<User | null> => {
  const userRepository = (await connectDB()).getRepository(User);
  return await userRepository.findOneBy({ email });
};

export const registerUser = async (data: User): Promise<User | null> => {
  const userRepository = (await connectDB()).getRepository(User);

  const user = new User();
  user.fullname = data.fullname;
  user.email = data.email;
  user.password = await argon2.hash(data.password);

  const newUser = await userRepository.save(user);
  return await userRepository.findOneBy({ id: newUser.id });
};
