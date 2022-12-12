import { Province } from "models/province.model";
import { User } from "models/user.model";
import { DataSource } from "typeorm";

export const db = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_HOST),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  synchronize: process.env.NODE_ENV !== "production",
  entities: [Province, User],
});

db.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

export const connectDB = (delay = 3000): Promise<DataSource> => {
  if (db.isInitialized) return Promise.resolve(db);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (db.isInitialized) resolve(db);
      else reject("Failed to create connection with database");
    }, delay);
  });
};
