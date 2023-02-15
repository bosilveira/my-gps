import { Request, Response } from "express";
import postPoint from "../services/postPoint.service";

const postPointController = async (req: Request, res: Response) => {
  try {
    const { id, latitude, longitude, speed, user } = req.body;
    const pointResponse = await postPoint({ id, latitude, longitude, speed, user });
    return res.send(pointResponse).status(201);
  } catch (error) {
    
    
  }
};
  
export default postPointController;