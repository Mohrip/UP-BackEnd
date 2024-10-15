import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3001;
  await app.listen(3001);
  console.log(`Application is running on: http://localhost:${port}`);


}
bootstrap();
