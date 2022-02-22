import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Invoice } from './entity/invoice.entity';
import { Connection, Repository } from 'typeorm';
import { InvoiceMapper } from './dto-to-entity-mapper';
import { InvoiceDto } from './dto/invoice.dto';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice)
    private invoiceRepository: Repository<Invoice>,
    private invoiceMapper: InvoiceMapper,
  ) {}

  async createSingle(invoiceDto: InvoiceDto) {
    try {
      const invoice = this.invoiceMapper.mapCompanyDtoToEntity(invoiceDto);
      await this.invoiceRepository.save(await invoice);
    } catch (err) {
      return { message: err };
    }
    return { message: 'success' };
  }

  async remove(id: string): Promise<void> {
    await this.invoiceRepository.delete(id);
  }

  findOne(id: string): Promise<Invoice> {
    return this.invoiceRepository.findOne(id);
  }
}
