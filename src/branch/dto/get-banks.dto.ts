import { IsString, Length } from 'class-validator';

export class GetAllBanksDto {
  @IsString()
  @Length(7, 7)
  employee_id: string;
}
