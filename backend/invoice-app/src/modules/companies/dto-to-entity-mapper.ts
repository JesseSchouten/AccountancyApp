import { Injectable } from '@nestjs/common';
import { AccountService } from '../accounts/account.service';
import { CompanyDto } from './dto/company.dto';
import { Company } from './entity/company.entity';

@Injectable()
export class CompanyMapper {
  constructor(private readonly accountService: AccountService) {}

  public async mapCompanyDtoToEntity(companyDto: CompanyDto): Promise<Company> {
    const company = new Company();
    company.name = companyDto.name;
    company.address = companyDto.address;
    company.zipCode = companyDto.zipCode;
    company.vatNumber = companyDto.vatNumber;
    company.account = await this.accountService.findOne(companyDto.accountId);
    return company;
  }
}
