import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ApiKeyMiddleware } from './middleware/api-key.middleware';
import { AuthorizationMiddleware } from './middleware/authorization.middleware';
import { database } from './database/database.module';
@Module({
  imports: [database],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ApiKeyMiddleware, AuthorizationMiddleware).forRoutes('*');
  }
}
