import { Router } from "express";
import getPointListController from "../controllers/getPointList.controller";
import getPointController from "../controllers/getPoint.controller";
import postPointController from "../controllers/postPoint.controller";
import patchPointController from "../controllers/patchPoint.controller";

const pointPath = Router()
pointPath.get('/points', getPointListController)
pointPath.get('/point/:id', getPointController)
pointPath.post('/points', postPointController)
pointPath.patch('/point/:id', patchPointController)

export default pointPath