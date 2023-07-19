import { Body, Controller, Get } from '@nestjs/common';
import { BranchService } from './branch.service';

@Controller('hcm/api/agent')
export class BranchController {
  constructor(private branchService: BranchService) {}

  @Get('/getListAllBranch')
  getAllBranch(@Body() employee_id: string): Promise<object> {
    return this.branchService.getAllBranch(employee_id);
  }
}
