import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(); // Enable CORS if needed

  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0'); // Ensure it binds to all network interfaces
  console.log(`🚀 Server is running on port ${port}`);
}
bootstrap();
