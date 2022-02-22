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
import { InvoiceElementService } from './invoice-element.service';
import { ApiTags } from '@nestjs/swagger';
import { InvoiceElementDto } from './dto/invoice-element.dto';
import { InvoiceService } from '../invoices/invoice.service';

@ApiTags('Invoices')
@Controller('')
export class InvoiceElementController {
  companyService: any;
  constructor(
    private readonly invoiceElementService: InvoiceElementService,
    private readonly invoiceService: InvoiceService,
  ) {}

  @Post('/invoice-element')
  @ApiCreatedResponse({
    status: 201,
    description: 'Invoice Element succesfully logged.',
  })
  async createSingle(
    @Body(new ValidationPipe())
    invoiceElementDto: InvoiceElementDto,
  ) {
    return this.invoiceElementService.createSingle(invoiceElementDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invoiceElementService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.invoiceElementService.remove(id);
  }
}
