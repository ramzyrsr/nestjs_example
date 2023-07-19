import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiKeyMiddleware } from './middleware/api-key.middleware';
import { AuthorizationMiddleware } from './middleware/authorization.middleware';
import { BranchModule } from './branch/branch.module';
import { Branch } from './branch/branch.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      name: 'DB_MMFPROD',
      type: 'postgres',
      host: process.env.HOST_MMFPROD,
      port: Number(process.env.PORT_MMFPROD),
      username: process.env.USER_MMFPROD,
      password: process.env.PASSWORD_MMFPROD,
      database: process.env.DATABASE_MMFPROD,
      autoLoadEntities: true,
      // keep true for dev only!
      synchronize: false,
      entities: [],
    }),
    TypeOrmModule.forRoot({
      name: 'DB_HCM',
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.HOST_HCM),
      username: process.env.USER_HCM,
      password: process.env.PASSWORD_HCM,
      database: process.env.DATABASE_HCM,
      autoLoadEntities: true,
      // keep true for dev only!
      synchronize: false,
      entities: [Branch],
    }),
    BranchModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ApiKeyMiddleware, AuthorizationMiddleware).forRoutes('*');
  }
}
