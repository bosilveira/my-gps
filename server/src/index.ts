import { AppDataSource } from "./data-source"
import { User } from "./entities/user.entity"
import { Point } from "./entities/point.entity"
import { Order } from "./entities/Order.entity"
import * as express from "express";
import userPath from "./routes/user.route";
import pointPath from "./routes/point.route";
import orderPath from "./routes/order.route";
import loginPath from "./routes/login.route";

AppDataSource.initialize().then(async () => {

  console.log("Inserting a new user into the database...")

  const user = new User()
  user.name = "Admin"
  user.email = "admin@email.com"
  user.role = 0
  user.department = 'Tech'

  await AppDataSource.manager.save(user)
  
  console.log("Saved a new user with id: " + user.id)

  console.log("Loading users from the database...")
  const users = await AppDataSource.manager.find(User)
  console.log("Loaded users: ", users)

  console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))

const app = express();
app.use(express.json());
app.use(loginPath);
app.use(userPath);
app.use(pointPath);
app.use(orderPath);

// app.use((req, res, next) => {
//   console.log('Time:', Date.now())
//   next()
// })

app.listen(3000);
