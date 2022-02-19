import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Company } from './entity/company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
  ) {}

  async createSingle(company: Company) {
    //Do retries heres
    try {
      await this.companyRepository.save(company);
    } catch (err) {
      return { message: err };
    }
    return { message: 'success' };
  }

  findOne(id: string): Promise<Company> {
    return this.companyRepository.findOne(id);
  }
}
