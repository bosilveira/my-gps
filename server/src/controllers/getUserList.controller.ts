import { Request, Response } from "express";
import getUserList from "../services/getUserList.service";

const getUserListController = async (req: Request, res: Response) => {
  try {
    const userListResponse = await getUserList();
    return res.send(userListResponse).status(200);
  } catch (error) {
    
    
  }
};

export default getUserListController;