// import { NestFactory, Reflector ,HttpAdapterHost} from '@nestjs/core';
// import { AppModule } from './app.module';
// import { CacheInterceptor,CACHE_MANAGER } from '@nestjs/cache-manager';

// class AppCacheInterceptor extends CacheInterceptor {
//   constructor(cacheManager: any, reflector: Reflector,  readonly httpAdapterHost: HttpAdapterHost) {
//     super(cacheManager, reflector);
//   }
// }
// // 9663398670

// // Node.JS
// // KAFKA
// // Apache Camel
// // Docker Kubernetes
// // Microservices
// // Java SpringBoot
// // React, Next.JS & React Native


// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.useGlobalInterceptors(
//     new AppCacheInterceptor(
//       app.get(CACHE_MANAGER),
//       app.get(Reflector),
//       app.get(HttpAdapterHost),
//     ),
  
//   );
//   await app.listen(process.env.PORT ?? 5001);
// }
// bootstrap();
import { NestFactory ,HttpAdapterHost} from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { CacheInterceptor, CACHE_MANAGER } from '@nestjs/cache-manager';
import { Reflector } from '@nestjs/core';

// Using the standard CacheInterceptor directly

// Extend CacheInterceptor to accept HttpAdapterHost without error
class AppCacheInterceptor extends CacheInterceptor {
  constructor(cacheManager: unknown, reflector: Reflector,  readonly httpAdapterHost: HttpAdapterHost) {
    super(cacheManager, reflector);
  }
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // Attach the custom interceptor globally
  app.useGlobalInterceptors(
    new AppCacheInterceptor(
      app.get(CACHE_MANAGER),
      app.get(Reflector),
      app.get(HttpAdapterHost)
    ),
  );
  await app.listen(5001);
  console.log('API Gateway listening on http://localhost:5001');
}
bootstrap();
