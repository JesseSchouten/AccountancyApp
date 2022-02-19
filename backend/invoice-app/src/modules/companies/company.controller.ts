import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { CompanyService } from './company.service';
import { ApiTags } from '@nestjs/swagger';
import { Company } from './entity/company.entity';
import { CompanyDto } from './dto/company.dto';
import { Account } from '../accounts/entity/account.entity';
import { AccountService } from '../accounts/account.service';

@ApiTags('Invoices')
@Controller('')
export class CompanyController {
  constructor(
    private readonly companyService: CompanyService,
    private readonly accountService: AccountService,
  ) {}

  @Post('/company')
  @ApiCreatedResponse({
    status: 201,
    description: 'Company succesfully logged.',
  })
  async handleCompany(
    @Body(new ValidationPipe())
    companyDto: CompanyDto,
  ) {
    const company = new Company();
    company.name = companyDto.name;
    company.address = companyDto.address;
    company.zipCode = companyDto.zipCode;
    company.vatNumber = companyDto.vatNumber;
    company.account = await this.accountService.findOne(companyDto.accountId);
    return this.companyService.createSingle(company);
  }
}
