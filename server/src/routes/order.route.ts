import { Router } from "express";
import getOrderListController from "../controllers/getOrderList.controller";
import getOrderController from "../controllers/getOrder.controller";
import postOrderController from "../controllers/postOrder.controller";
import patchOrderController from "../controllers/patchOrder.controller";

const orderPath = Router()
orderPath.get('/orders', getOrderListController)
orderPath.get('/order/:id', getOrderController)
orderPath.post('/orders', postOrderController)
orderPath.patch('/order/:id', patchOrderController)

export default orderPath