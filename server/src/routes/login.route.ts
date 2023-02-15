import { Router } from "express";
import loginController from "../controllers/login.controller";

const loginPath = Router()
loginPath.post('/login', loginController)

export default loginPath