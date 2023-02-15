import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entities/user.entity"
import { Point } from "./entities/point.entity"
import { Order } from "./entities/Order.entity"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [User, Point, Order],
    migrations: [],
    subscribers: [],
})

