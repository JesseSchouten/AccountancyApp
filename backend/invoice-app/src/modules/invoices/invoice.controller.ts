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
    const invoice = new Invoice();
    invoice.date = invoiceDto.date;
    invoice.paymentTerm = invoiceDto.paymentTerm;
    invoice.account = await this.accountService.findOne(invoiceDto.accountId);
    invoice.company = await this.companyService.findOne(invoiceDto.companyId);
    return this.invoiceService.createSingle(invoice);
  }
}
