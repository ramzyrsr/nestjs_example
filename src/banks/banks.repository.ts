import { EntityRepository, Repository } from 'typeorm';
import { Banks } from './banks.entity';

@EntityRepository(Banks)
export class BanksRepository extends Repository<Banks> {}
