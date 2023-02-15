import { User } from "../entities/user.entity";
import { AppDataSource } from "../data-source";

const getUser = async (id: number): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const userEntry = await userRepository.findOne({ where: { id } });
  return userEntry;
};

export default getUser;
