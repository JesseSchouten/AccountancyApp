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
import { CompanyService } from './company.service';
import { ApiTags } from '@nestjs/swagger';
import { Company } from './entity/company.entity';
import { CompanyDto } from './dto/company.dto';
import { Account } from '../accounts/entity/account.entity';
import { AccountService } from '../accounts/account.service';

@ApiTags('Invoices')
@Controller('')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post('/company')
  @ApiCreatedResponse({
    status: 201,
    description: 'Company succesfully logged.',
  })
  async createSingle(
    @Body(new ValidationPipe())
    companyDto: CompanyDto,
  ) {
    return this.companyService.createSingle(companyDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyService.remove(id);
  }
}
