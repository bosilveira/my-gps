import { Order } from "../entities/Order.entity";
import { AppDataSource } from "../data-source";

const getOrderList = async (): Promise<Order[]> => {
  const orderRepository = AppDataSource.getRepository(Order);
  const orderEntries = await orderRepository.find();
  return orderEntries;
};

export default getOrderList;
