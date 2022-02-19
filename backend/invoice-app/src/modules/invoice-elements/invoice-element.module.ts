import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompaniesModule } from '../companies/company.module';
import { CompanyService } from '../companies/company.service';
import { InvoiceModule } from '../invoices/invoice.module';
import { InvoiceService } from '../invoices/invoice.service';
import { InvoiceElement } from './entity/invoice-element.entity';
import { InvoiceElementController } from './invoice-element.controller';
import { InvoiceElementService } from './invoice-element.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([InvoiceElement]),
    InvoiceModule,
    CompaniesModule,
  ],
  controllers: [InvoiceElementController],
  providers: [InvoiceElementService, InvoiceService, CompanyService],
  exports: [TypeOrmModule],
})
export class InvoiceElementModule {}
