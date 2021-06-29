import { use } from 'chai'
import chaiHTTP from 'chai-http'
import {createApp} from "../app"
import {appConfig} from "../config/app"
import { Express } from "express-serve-static-core"
import {createConnection} from "typeorm";
import {typeORMConfig} from "../config/typeorm";

use(chaiHTTP)

const cache:any = {}

export async function getApp(): Promise<Express> {
  if(cache.app) { return cache.app }

  await createConnection(typeORMConfig)
  const app = await createApp()
  app.listen(appConfig.port, appConfig.host)
  cache.app = app;

  return app
}