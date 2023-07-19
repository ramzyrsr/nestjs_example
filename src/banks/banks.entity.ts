import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('bank_tbl')
export class Banks {
  @PrimaryColumn()
  golid: number;

  @Column()
  bank_code: string;

  @Column()
  bank_name: string;
}
