import { createConnection } from "typeorm";
import { User } from "./entities/user";

export const connectDatabase = async () => {
  await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "your-username",
    password: "your-password",
    database: "your-database",
    entities: [User],
    synchronize: true,
  });
};
