import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { ApiTags } from '@nestjs/swagger';
import { CompanyDto } from '../companies/dto/company.dto';
import { AccountService } from './account.service';
import { AccountDto } from './dto/account.dto';
import { Account } from './entity/account.entity';

@ApiTags('Invoices')
@Controller('')
export class AccountController {
  constructor(private readonly accountsService: AccountService) {}

  @Post('/account')
  @ApiCreatedResponse({
    status: 201,
    description: 'Account succesfully logged.',
  })
  handleAccount(
    @Body(new ValidationPipe())
    accountDto: AccountDto,
  ) {
    const account = new Account();
    account.userName = accountDto.userName;
    account.password = accountDto.password; //should be hashed
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
    return this.accountsService.createSingle(account);
  }
}
