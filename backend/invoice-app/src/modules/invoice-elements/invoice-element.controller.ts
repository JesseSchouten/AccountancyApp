import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { InvoiceElementService } from './invoice-element.service';
import { ApiTags } from '@nestjs/swagger';
import { InvoiceElement } from './entity/invoice-element.entity';
import { InvoiceElementDto } from './dto/invoice-element.dto';
import { InvoiceService } from '../invoices/invoice.service';

@ApiTags('Invoices')
@Controller('')
export class InvoiceElementController {
  constructor(
    private readonly invoiceElementService: InvoiceElementService,
    private readonly invoiceService: InvoiceService,
  ) {}

  @Post('/invoice-element')
  @ApiCreatedResponse({
    status: 201,
    description: 'Company succesfully logged.',
  })
  async handleInvoiceElement(
    @Body(new ValidationPipe())
    invoiceElementDto: InvoiceElementDto,
  ) {
    return this.invoiceElementService.createSingle(invoiceElementDto);
  }
}
