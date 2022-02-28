import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
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
    description: 'Invoice succesfully logged.',
  })
  async createSingle(
    @Body(new ValidationPipe())
    invoiceDto: InvoiceDto,
  ) {
    return this.invoiceService.createSingle(invoiceDto);
  }

  @Get('/invoice/:id')
  findOne(@Param('id') id: string) {
    return this.invoiceService.findOne(id);
  }

  @Delete('/invoice/:id')
  remove(@Param('id') id: string) {
    return this.invoiceService.remove(id);
  }

  @Put('/invoice/:id')
  @ApiCreatedResponse({
    status: 201,
    description: 'Invoice Element succesfully Updated.',
  })
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe())
    invoiceDto: InvoiceDto,
  ) {
    return await this.invoiceService.update(id, invoiceDto);
  }
}
