import { Request, Response } from "express";
import getOrder from "../services/getOrder.service";

interface IGetOrderRequest extends Request {
  id?: number
}

const getOrderController = async (req: IGetOrderRequest, res: Response) => {
  try {
    const id = req.id;
    const orderResponse = await getOrder(id);
    return res.send(orderResponse).status(200);
  } catch (error) {
    
    
  }
};

export default getOrderController;