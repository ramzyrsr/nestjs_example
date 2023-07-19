import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BanksModule } from 'src/banks/banks.module';
import { BranchModule } from 'src/branch/branch.module';
import {
  HCM_Entities,
  HCM_RECRUITMENT_Entities,
  MMFPROD_Entities,
} from 'src/config/entities.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      name: 'MMFPROD',
      useFactory: () => {
        return {
          type: 'postgres',
          host: process.env.HOST_MMFPROD,
          port: Number(process.env.PORT_MMFPROD),
          username: process.env.USER_MMFPROD,
          password: process.env.PASSWORD_MMFPROD,
          database: process.env.DATABASE_MMFPROD,
          entities: MMFPROD_Entities,
          synchronize: false,
        };
      },
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      name: 'HCM',
      useFactory: () => {
        return {
          type: 'postgres',
          host: process.env.DB_HOST,
          port: Number(process.env.HOST_HCM),
          username: process.env.USER_HCM,
          password: process.env.PASSWORD_HCM,
          database: process.env.DATABASE_HCM,
          entities: HCM_Entities,
          synchronize: false,
        };
      },
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      name: 'HCM_RECRUITMENT',
      useFactory: () => {
        return {
          type: 'postgres',
          host: process.env.HOST_HCM_RECRUITMENT,
          port: Number(process.env.PORT_HCM_RECRUITMENT),
          username: process.env.USER_HCM_RECRUITMENT,
          password: process.env.PASSWORD_HCM_RECRUITMENT,
          database: process.env.DATABASE_HCM_RECRUITMENT,
          entities: HCM_RECRUITMENT_Entities,
          synchronize: false,
        };
      },
    }),

    BranchModule,
    BanksModule,
  ],
})
export class database {}
