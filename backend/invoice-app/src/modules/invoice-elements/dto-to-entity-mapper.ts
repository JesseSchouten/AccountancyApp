import { Injectable } from '@nestjs/common';
import { InvoiceService } from '../invoices/invoice.service';
import { InvoiceElementDto } from './dto/invoice-element.dto';
import { InvoiceElement } from './entity/invoice-element.entity';

@Injectable()
export class InvoiceElementMapper {
  constructor(private readonly invoiceService: InvoiceService) {}

  public async mapCompanyDtoToEntity(
    invoiceElementDto: InvoiceElementDto,
  ): Promise<InvoiceElement> {
    const invoiceElement = new InvoiceElement();
    invoiceElement.invoice = await this.invoiceService.findOne(
      invoiceElementDto.invoiceId,
    );
    invoiceElement.description = invoiceElementDto.description;
    invoiceElement.quantity = invoiceElementDto.quantity;
    invoiceElement.ratePerQuantity = invoiceElementDto.ratePerQuantity;
    invoiceElement.currency = invoiceElementDto.currency;
    invoiceElement.vatPercentage = (1 + invoiceElementDto.vatPercentage) / 100;
    invoiceElement.shiftVat = invoiceElementDto.shiftVat;
    return invoiceElement;
  }
}
