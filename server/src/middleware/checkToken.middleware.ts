import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

interface ITokenRequest extends Request {
  user?: User
}


export const checkToken = async ( req: ITokenRequest, res: Response, next: NextFunction ) => {
    try {
      const token = req.headers.authorization;
      const userRepository = AppDataSource.getRepository(User);
      jwt.verify( token, process.env.JWT_SECRET,
        async (err: any, decoded: any) => {
          const userEntry = await userRepository.findOneBy({ email: decoded.email });
          req.user = userEntry;
          next();
        }
      );
    } catch (error) {
      return res.status(401).json({ message: "Token Error" });
    }
  };