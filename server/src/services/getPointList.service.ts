import { Point } from "../entities/point.entity";
import { AppDataSource } from "../data-source";

const getPointList = async (): Promise<Point[]> => {
  const pointRepository = AppDataSource.getRepository(Point);
  const pointEntries = await pointRepository.find();
  return pointEntries;
};

export default getPointList;
