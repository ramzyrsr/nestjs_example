import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Branch } from './branch.entity';
import { BranchController } from './branch.controller';
import { BranchService } from './branch.service';
import { BranchRepository } from './branch.repository';
import { ResponseUtil } from 'src/helper/response.util';

@Module({
  imports: [TypeOrmModule.forFeature([Branch], 'DB_HCM')],
  controllers: [BranchController],
  providers: [BranchService, BranchRepository, ResponseUtil],
})
export class BranchModule {}
