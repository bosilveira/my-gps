import { Request, Response } from "express";
import patchUser from "../services/patchUser.service";

interface IPatchUserRequest extends Request {
    id?: number
}

const patchUserController = async (req: IPatchUserRequest, res: Response) => {
try {
    const id = req.id;
    const { available, status } = req.body;
    const userResponse = await patchUser({ id, available, status });
    return res.send(userResponse).status(200);
} catch (error) {
    
    
}
};
  
export default patchUserController;