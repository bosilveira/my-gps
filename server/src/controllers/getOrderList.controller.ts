import { Request, Response } from "express";
import getOrderList from "../services/getOrderList.service";

const getOrderListController = async (req: Request, res: Response) => {
  try {
    const orderListResponse = await getOrderList();
    return res.send(orderListResponse).status(200);
  } catch (error) {
    
    
  }
};

export default getOrderListController;