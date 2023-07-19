import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Branch } from './branch.entity';
import { BranchRepository } from './branch.repository';
import { ResponseUtil } from 'src/helper/response.util';

@Injectable()
export class BranchService {
  constructor(
    @InjectRepository(Branch)
    private branchRepository: BranchRepository,
    private readonly responseUtil: ResponseUtil,
  ) {}

  async getAllBranch(employee_id): Promise<object> {
    const found = await this.branchRepository.find({
      select: { golid: true, branch_name: true, branch_code: true },
    });

    const respayload = this.responseUtil.dataResponse(
      200,
      found,
      employee_id.employee_id,
    );

    return respayload;
  }
}
