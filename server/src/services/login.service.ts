import { User } from "../entities/user.entity";
import { AppDataSource } from "../data-source";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

interface ILogin {
    email: string,
    password?: string,
}

const login = async ( { email, password }: ILogin ): Promise<String> => {
    const userRepository = AppDataSource.getRepository(User);
    const userEntry = await userRepository.findOne({ where: { email } });
    if (!userEntry) {
        throw new Error("Email");
    }

    // if (!bcrypt.compareSync(password, userEntry.password)) {
    //     throw new Error("Password");
    // }

    const token = jwt.sign({ email }, String(process.env.JWT_SECRET), {
        expiresIn: "1d"
      });

    return token;
};
  
export default login;
  