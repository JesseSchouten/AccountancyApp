import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsModule } from '../accounts/account.module';
import { AccountService } from '../accounts/account.service';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { Company } from './entity/company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Company]), AccountsModule],
  controllers: [CompanyController],
  providers: [CompanyService, AccountService],
  exports: [TypeOrmModule],
})
export class CompaniesModule {}
