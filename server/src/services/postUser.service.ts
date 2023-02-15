import { User } from "../entities/user.entity";
import { AppDataSource } from "../data-source";
import * as bcrypt from "bcrypt";

interface IPostUser {
    name: string,
    email: string,
    password?: string,
    role: number,
    department: string
  }

const postUser = async ( { name, email, password, role, department }: IPostUser ): Promise<User> => {
    const userRepository = AppDataSource.getRepository(User);
    const emailCheck = await userRepository.find({ where: { email } });
    if (emailCheck) {
        throw new Error("Email");
    }
    const userEntry = new User()
    userEntry.name = name
    userEntry.email = email
    //user.password = bcrypt.hashSync(password, 10);
    userEntry.role = role
    userEntry.department = department
    userRepository.create(userEntry);
    await userRepository.save(userEntry);
    return userEntry;
};
  
export default postUser;
  