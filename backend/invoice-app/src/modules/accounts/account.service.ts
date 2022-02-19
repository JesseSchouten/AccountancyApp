import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from './entity/account.entity';
import { Connection, Repository } from 'typeorm';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}

  async createSingle(account: Account) {
    try {
      await this.accountRepository.save(account);
    } catch (err) {
      return { message: err };
    }
    return { message: 'success' };
  }

  findOne(id: string): Promise<Account> {
    return this.accountRepository.findOne(id);
  }
}
