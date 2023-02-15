import { Order } from "../entities/Order.entity";
import { AppDataSource } from "../data-source";

const getOrder = async (id: number): Promise<Order> => {
  const orderRepository = AppDataSource.getRepository(Order);
  const userEntry = await orderRepository.findOne({ where: { id } });
  return userEntry;
};

export default getOrder;
