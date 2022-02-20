import { Injectable } from '@nestjs/common';
import { AccountService } from '../accounts/account.service';
import { AccountDto } from './dto/account.dto';
import { Account } from './entity/account.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AccountMapper {
  constructor() {}

  private async hashPassword(password: string) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }

  public async mapAccountDtoToEntity(accountDto: AccountDto): Promise<Account> {
    const account = new Account();
    account.userName = accountDto.userName;
    account.password = await this.hashPassword(accountDto.password); //should be hashed
    account.companyName = accountDto.companyName;
    account.address = accountDto.address;
    account.zipCode = accountDto.zipCode;
    account.vatNumber = accountDto.vatNumber ?? null;
    account.kvkNumber = accountDto.kvkNumber ?? null;
    account.kvkOriginCity = accountDto.kvkOriginCity ?? null;
    account.iban = accountDto.iban ?? null;
    account.email = accountDto.email;
    account.phone = accountDto.phone ?? null;
    account.mobile = accountDto.mobile ?? null;
    return account;
  }
}
