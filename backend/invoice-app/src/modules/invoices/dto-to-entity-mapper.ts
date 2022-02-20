import { Injectable } from '@nestjs/common';
import { AccountService } from '../accounts/account.service';
import { CompanyService } from '../companies/company.service';
import { InvoiceDto } from './dto/invoice.dto';
import { Invoice } from './entity/invoice.entity';
import { InvoiceService } from './invoice.service';

@Injectable()
export class InvoiceMapper {
  constructor(
    private readonly accountService: AccountService,
    private readonly companyService: CompanyService,
  ) {}

  public async mapCompanyDtoToEntity(invoiceDto: InvoiceDto): Promise<Invoice> {
    const invoice = new Invoice();
    invoice.date = invoiceDto.date;
    invoice.paymentTerm = invoiceDto.paymentTerm;
    invoice.account = await this.accountService.findOne(invoiceDto.accountId);
    invoice.company = await this.companyService.findOne(invoiceDto.companyId);
    return invoice;
  }
}
