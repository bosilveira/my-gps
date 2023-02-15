import { Point } from "../entities/point.entity";
import { AppDataSource } from "../data-source";

const getPoint = async (id: number): Promise<Point> => {
  const pointRepository = AppDataSource.getRepository(Point);
  const pointEntry = await pointRepository.findOne({ where: { id } });
  return pointEntry;
};

export default getPoint;
