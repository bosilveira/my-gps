import { User } from "../entities/user.entity";
import { AppDataSource } from "../data-source";
import * as bcrypt from "bcrypt";

export interface IPatchUser {
    id: number,
    available: boolean,
    status: string
  }

const patchUser = async ( { id, available, status }: IPatchUser ): Promise<User> => {
    const userRepository = AppDataSource.getRepository(User);
    const userEntry = await userRepository.findOne({ where: { id } });
    userEntry.available = available
    userEntry.status = status
    await userRepository.update(id, userEntry);
    return userEntry;
};
  
export default patchUser;
  