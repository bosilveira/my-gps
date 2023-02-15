import { Request, Response } from "express";
import patchOrder from "../services/patchOrder.service";

interface IPatchOrderRequest extends Request {
    id?: number
  }

const patchOrderController = async (req: IPatchOrderRequest, res: Response) => {
try {
    const id = req.id;
    const { flag, status, user } = req.body;
    const orderResponse = await patchOrder({ id, flag, status, user });
    return res.send(orderResponse).status(200);
} catch (error) {
    
    
}
};
  
export default patchOrderController;