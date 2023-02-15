import { Request, Response } from "express";
import patchPoint from "../services/patchPoint.service";

interface IPatchPointRequest extends Request {
    id?: number
  }

const patchPointController = async (req: IPatchPointRequest, res: Response) => {
try {
    const id = req.id;
    const { latitude, longitude, speed } = req.body;
    const pointResponse = await patchPoint({ id, latitude, longitude, speed });
    return res.send(pointResponse).status(200);
} catch (error) {
    
    
}
};
  
export default patchPointController;