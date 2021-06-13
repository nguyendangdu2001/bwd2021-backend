import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import cookieSession from 'cookie-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: true, credentials: true });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  app.use(
    cookieSession({
      name: 'eventBuzz-server-cookie',
      keys: ['dffdfdfdf', 'dsdss'],
      sameSite: 'lax',
      httpOnly: true,
    }),
  );
  app.use(cookieParser());
  app.use(passport.initialize());
  // app.use(passport.session());
  await app.listen(5000);
}
bootstrap();
