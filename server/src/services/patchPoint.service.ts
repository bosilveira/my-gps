import { Point } from "../entities/point.entity";
import { AppDataSource } from "../data-source";

interface IPatchPoint {
    id: number,
    latitude: number,
    longitude: number,
    speed: number,
  }

const patchPoint = async ( { id, latitude, longitude, speed }: IPatchPoint ): Promise<Point> => {
    const pointRepository = AppDataSource.getRepository(Point);
    const pointEntry = await pointRepository.findOne({ where: { id } });
    pointEntry.latitude = latitude
    pointEntry.longitude = longitude
    pointEntry.speed = speed
    await pointRepository.update(id, pointEntry);
    return pointEntry;
};
  
export default patchPoint;
  