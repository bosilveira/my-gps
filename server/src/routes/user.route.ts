import { Router } from "express";
import getUserListController from "../controllers/getUserList.controller";
import getUserController from "../controllers/getUser.controller";
import postUserController from "../controllers/postUser.controller";
import patchUserController from "../controllers/patchUser.controller";

const userPath = Router()
userPath.get('/users', getUserListController)
userPath.get('/user/:id', getUserController)
userPath.post('/users', postUserController)
userPath.patch('/user/:id', patchUserController)

export default userPath