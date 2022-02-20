import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsModule } from '../accounts/account.module';
import { AccountService } from '../accounts/account.service';
import { CompaniesModule } from '../companies/company.module';
import { CompanyService } from '../companies/company.service';
import { InvoiceMapper } from './dto-to-entity-mapper';
import { Invoice } from './entity/invoice.entity';
import { InvoiceController } from './invoice.controller';
import { InvoiceService } from './invoice.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Invoice]),
    AccountsModule,
    CompaniesModule,
  ],
  controllers: [InvoiceController],
  providers: [InvoiceService, AccountService, CompanyService, InvoiceMapper],
  exports: [TypeOrmModule, InvoiceMapper],
})
export class InvoiceModule {}
