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

  async remove(id: string): Promise<void> {
    await this.companyRepository.delete(id);
  }

  findOne(id: string): Promise<Company> {
    return this.companyRepository.findOne(id);
  }

  async update(id: string, companyDto: CompanyDto) {
    try {
      const company = await this.companyMapper.mapCompanyDtoToEntity(
        companyDto,
      );
      await this.companyRepository.update({ id: id }, company);
    } catch (err) {
      throw err;
    }
    return { message: 'success' };
  }
}
