import { Request, Response } from "express";
import login from "../services/login.service";

interface ILoginRequest extends Request {
    email: string,
    password?: string
  }

const loginController = async (req: ILoginRequest, res: Response) => {
try {
    const { email, password } = req.body;
    const loginResponse = await login({ email, password });
    return res.send(loginResponse).status(200);
} catch (error) {
    
    
}
};
  
export default loginController;