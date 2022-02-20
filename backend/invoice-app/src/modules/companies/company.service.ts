import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, QueryFailedError, Repository } from 'typeorm';
import { CompanyMapper } from './dto-to-entity-mapper';
import { CompanyDto } from './dto/company.dto';
import { Company } from './entity/company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
    private companyMapper: CompanyMapper,
  ) {}

  async createSingle(companyDto: CompanyDto) {
    try {
      const company = this.companyMapper.mapCompanyDtoToEntity(companyDto);
      await this.companyRepository.save(await company);
    } catch (err) {
      if (err instanceof QueryFailedError) {
        throw new HttpException(
          'Duplicate Key violation',
          HttpStatus.FORBIDDEN,
        );
      } else {
        throw err;
      }
    }
    return { message: 'success' };
  }

  findOne(id: string): Promise<Company> {
    return this.companyRepository.findOne(id);
  }
}
function mapCompanyDtoToEntity() {
  throw new Error('Function not implemented.');
}
