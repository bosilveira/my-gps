import { Request, Response } from "express";
import getPointList from "../services/getPointList.service";

const getPointListController = async (req: Request, res: Response) => {
  try {
    const orderListResponse = await getPointList();
    return res.send(orderListResponse).status(200);
  } catch (error) {
    
    
  }
};

export default getPointListController;