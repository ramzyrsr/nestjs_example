import { Body, Controller, Get } from '@nestjs/common';
import { BranchService } from './branch.service';
import { GetAllBranchDto } from './dto/get-branch.dto';

@Controller('hcm/api/agent')
export class BranchController {
  constructor(private branchService: BranchService) {}

  @Get('/getListAllBranch')
  getAllBranch(@Body() banks: GetAllBranchDto): Promise<object> {
    return this.branchService.getAllBranch(banks.employee_id);
  }
}
