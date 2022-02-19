import { Module } from '@nestjs/common';
import { CompaniesModule } from './modules/companies/company.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { configService } from './config/config.service';
import { AccountsModule } from './modules/accounts/account.module';
import { InvoiceElementModule } from './modules/invoice-elements/invoice-element.module';
import { InvoiceModule } from './modules/invoices/invoice.module';

@Module({
  imports: [
    CompaniesModule,
    AccountsModule,
    InvoiceModule,
    InvoiceElementModule,
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
  ],
})
export class AppModule {
  private connection: Connection;
}
