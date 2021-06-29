import {json, urlencoded} from "body-parser";
import express from 'express';
import {container, publish, DependencyContainer} from 'expressman';
import {EntityManager, getConnection} from "typeorm";
import TodoEntryRepository from "./repositories/TodoEntryRepository";

export async function createApp() {
  const app = express();

  app.use(json());
  app.use(urlencoded({ extended: true }));

  container.register(EntityManager, { useValue: getConnection().createEntityManager( )})
  container.register(TodoEntryRepository, {
    useFactory: (dc: DependencyContainer) => {
      const entityManager = dc.resolve(EntityManager)
      return entityManager.getCustomRepository(TodoEntryRepository)
    }
  })

  await publish(app, {
    pattern:'src/routes/**/*.ts',
    onUncaughtException(container: DependencyContainer, error: any) {
      console.error('Error!')
      console.log(error);
    },
    configureContainer(container: DependencyContainer): any {
      container.register(EntityManager, { useValue: getConnection().createEntityManager( )})
    }
  });

  return app;
}