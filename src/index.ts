import "reflect-metadata"
require('dotenv').config()

import { createApp } from "./app"
import { appConfig } from './config/app'
import {createConnection} from "typeorm";
import {typeORMConfig} from "./config/typeorm";

async function run() {
  await createConnection(typeORMConfig)
  const app = await createApp();
  app.listen(appConfig.port, appConfig.host)
}

run().then(() => console.log(`Server started on: ${appConfig.host}:${appConfig.port}`))