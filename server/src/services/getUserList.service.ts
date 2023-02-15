import { User } from "../entities/user.entity";
import { AppDataSource } from "../data-source";

const getUserList = async (): Promise<User[]> => {
  const userRepository = AppDataSource.getRepository(User);
  const userEntries = await userRepository.find();
  return userEntries;
};

export default getUserList;
