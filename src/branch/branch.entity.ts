import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('p_c_x_company_office_tbl')
export class Branch {
  @PrimaryColumn()
  golid: number;

  @Column()
  branch_name: string;

  @Column()
  branch_code: string;
}
