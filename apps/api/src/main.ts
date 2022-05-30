import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // set the globalprefix for the nest calls
  const globalPrefix = 'sci-api';
  app.setGlobalPrefix(globalPrefix);

  // set the port number for nest to run from
  const port = process.env.PORT || 3333;

  // listen for the nest app to be startup
  await app.listen(port);

  // log the information about nest to console
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap(); // run the nest bootstrap function
