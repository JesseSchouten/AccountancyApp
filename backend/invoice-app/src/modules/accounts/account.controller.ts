import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
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
  async createSingle(
    @Body(new ValidationPipe())
    accountDto: AccountDto,
  ) {
    return this.accountsService.createSingle(accountDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountsService.remove(id);
  }
}
