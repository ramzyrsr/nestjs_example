import { Body, Controller, Get } from '@nestjs/common';
import { BranchService } from './branch.service';
import { GetAllBanksDto } from './dto/get-banks.dto';

@Controller('hcm/api/agent')
export class BranchController {
  constructor(private branchService: BranchService) {}

  @Get('/getListAllBranch')
  getAllBranch(@Body() banks: GetAllBanksDto): Promise<object> {
    return this.branchService.getAllBranch(banks.employee_id);
  }
}
