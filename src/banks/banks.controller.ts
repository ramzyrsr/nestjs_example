import { Body, Controller, Get } from '@nestjs/common';
import { BanksService } from './banks.service';

@Controller('hcm/api/agent')
export class BanksController {
  constructor(private banksService: BanksService) {}

  @Get('/banks')
  getAllBanks(@Body() employee_id: string): Promise<object> {
    return this.banksService.getAllBanks(employee_id);
  }
}
