import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Banks } from './banks.entity';
import { BanksController } from './banks.controller';
import { BanksRepository } from './banks.repository';
import { BanksService } from './banks.service';
import { ResponseUtil } from 'src/helper/response.util';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Banks], 'MMFPROD')],
  controllers: [BanksController],
  providers: [BanksService, BanksRepository, ResponseUtil],
})
export class BanksModule {}
