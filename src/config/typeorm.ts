import {PostgresConnectionOptions} from "typeorm/driver/postgres/PostgresConnectionOptions";
import {TodoEntry} from "../models/Todo";
import { appConfig } from "./app"

export const typeORMConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: appConfig.postgres.host,
  port: appConfig.postgres.port,
  username: appConfig.postgres.username,
  password: appConfig.postgres.password,
  database: appConfig.postgres.database,
  synchronize: true,
  logging: false,
  entities: [
    TodoEntry
  ]
};