import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from './entity/account.entity';
import { Connection, QueryFailedError, Repository } from 'typeorm';
import { AccountMapper } from './dbo-to-entity-mapper';
import { AccountDto } from './dto/account.dto';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
    private accountMapper: AccountMapper,
  ) {}

  async createSingle(accountDto: AccountDto) {
    try {
      const account = this.accountMapper.mapAccountDtoToEntity(accountDto);
      await this.accountRepository.save(await account);
    } catch (err) {
      if (err instanceof QueryFailedError) {
        throw new HttpException(
          'Duplicate Key violation',
          HttpStatus.FORBIDDEN,
        );
      } else {
        throw err;
      }
    }
    return { message: 'success' };
  }

  findOne(id: string): Promise<Account> {
    return this.accountRepository.findOne(id);
  }
}
