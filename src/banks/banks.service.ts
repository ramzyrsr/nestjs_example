import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Banks } from './banks.entity';
import { ResponseUtil } from 'src/helper/response.util';
import { Repository } from 'typeorm';

@Injectable()
export class BanksService {
  constructor(
    @InjectRepository(Banks, 'MMFPROD')
    private banksRepository: Repository<Banks>,
    private readonly responseUtil: ResponseUtil,
  ) {}

  async getAllBanks(employee_id): Promise<object> {
    const found = await this.banksRepository.find({
      select: { golid: true, bank_code: true, bank_name: true },
    });

    const respayload = this.responseUtil.dataResponse(
      200,
      found,
      employee_id.employee_id,
    );

    return respayload;
  }
}
