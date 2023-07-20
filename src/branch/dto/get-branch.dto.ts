import { IsString, Length } from 'class-validator';

export class GetAllBranchDto {
  @IsString()
  @Length(7, 7)
  employee_id: string;
}
