import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { InvoiceService } from './invoice.service';
import { ApiTags } from '@nestjs/swagger';
import { Invoice } from './entity/invoice.entity';
import { InvoiceDto } from './dto/invoice.dto';
import { CompanyService } from '../companies/company.service';
import { AccountService } from '../accounts/account.service';

@ApiTags('Invoices')
@Controller('')
export class InvoiceController {
  constructor(
    private readonly invoiceService: InvoiceService,
    private readonly companyService: CompanyService,
    private readonly accountService: AccountService,
  ) {}

  @Post('/invoice')
  @ApiCreatedResponse({
    status: 201,
    description: 'Company succesfully logged.',
  })
  async handleInvoice(
    @Body(new ValidationPipe())
    invoiceDto: InvoiceDto,
  ) {
    return this.invoiceService.createSingle(invoiceDto);
  }
}
