import { Request, Response } from "express";
import postOrder from "../services/postOrder.service";

const postOrderController = async (req: Request, res: Response) => {
  try {
    const { id, title, flag, status, user } = req.body;
    const postResponse = await postOrder({ id, title, flag, status, user });
    return res.send(postResponse).status(201);
  } catch (error) {
    
    
  }
};
  
export default postOrderController;