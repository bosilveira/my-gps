import { Point } from "../entities/point.entity";
import { User } from "../entities/user.entity";
import { AppDataSource } from "../data-source";

interface IPostPoint {
    id: number,
    latitude: number,
    longitude: number,
    speed: number,
    user: User
  }

const postPoint = async ( { id, latitude, longitude, speed, user }: IPostPoint ): Promise<Point> => {
    const pointRepository = AppDataSource.getRepository(Point);
    const pointCheck = await pointRepository.find({ where: { id } });
    if (pointCheck) {
        throw new Error("Point");
    }
    const pointEntry = new Point()
    pointEntry.id = id
    pointEntry.latitude = latitude
    pointEntry.longitude = longitude
    pointEntry.speed = speed
    pointEntry.user = user.id
    pointRepository.create(pointEntry);
    await pointRepository.save(pointEntry);
    return pointEntry;
};
  
export default postPoint;
  