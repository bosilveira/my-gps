import { Order } from "../entities/Order.entity";
import { User } from "../entities/user.entity";
import { AppDataSource } from "../data-source";

interface IPostOrder {
    id: number,
    title: string,
    flag: number,
    status: string,
    user: User
  }

const postOrder = async ( { id, title, flag, status, user }: IPostOrder ): Promise<Order> => {
    const orderRepository = AppDataSource.getRepository(Order);
    const orderCheck = await orderRepository.find({ where: { id } });
    if (orderCheck) {
        throw new Error("Order");
    }
    const orderEntry = new Order()
    orderEntry.title = title
    orderEntry.flag = flag
    orderEntry.status = status
    orderEntry.user = user.id
    orderRepository.create(orderEntry);
    await orderRepository.save(orderEntry);
    return orderEntry;
};
  
export default postOrder;
  