import { Request, Response } from "express";
import getUser from "../services/getUser.service";

interface IGetUserRequest extends Request {
  id?: number
}

const getUserController = async (req: IGetUserRequest, res: Response) => {
  try {
    const id = req.id;
    const userResponse = await getUser(id);
    return res.send(userResponse).status(200);
  } catch (error) {
    
    
  }
};

export default getUserController;