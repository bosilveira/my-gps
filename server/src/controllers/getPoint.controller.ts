import { Request, Response } from "express";
import getPoint from "../services/getPoint.service";

interface IGetPointRequest extends Request {
  id?: number
}

const getPointController = async (req: IGetPointRequest, res: Response) => {
  try {
    const id = req.id;
    const pointResponse = await getPoint(id);
    return res.send(pointResponse).status(200);
  } catch (error) {
    
    
  }
};

export default getPointController;