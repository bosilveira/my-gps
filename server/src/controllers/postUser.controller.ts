import { Request, Response } from "express";
import postUser from "../services/postUser.service";

const postUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role, department } = req.body;
    const user = await postUser({ name, email, password, role, department });
    return res.send(user).status(201);
  } catch (error) {
    
    
  }
};
  
export default postUserController;