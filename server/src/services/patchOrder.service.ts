import { Order } from "../entities/Order.entity";
import { User } from "../entities/user.entity";
import { AppDataSource } from "../data-source";

interface IPatchOrder {
    id: number,
    flag: number,
    status: string,
    user: User,
  }

const patchOrder = async ( { id, flag, status, user }: IPatchOrder ): Promise<Order> => {
    const orderRepository = AppDataSource.getRepository(Order);
    const orderEntry = await orderRepository.findOne({ where: { id } });
    orderEntry.flag = flag
    orderEntry.status = status
    orderEntry.user = user.id
    await orderRepository.update(id, orderEntry);
    return orderEntry;
};
  
export default patchOrder;
  