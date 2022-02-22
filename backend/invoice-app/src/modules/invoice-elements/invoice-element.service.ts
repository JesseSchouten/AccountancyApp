import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InvoiceElement } from './entity/invoice-element.entity';
import { Connection, Repository } from 'typeorm';
import { InvoiceService } from '../invoices/invoice.service';
import { InvoiceElementDto } from './dto/invoice-element.dto';
import { InvoiceElementMapper } from './dto-to-entity-mapper';

@Injectable()
export class InvoiceElementService {
  constructor(
    @InjectRepository(InvoiceElement)
    private invoiceElementRepository: Repository<InvoiceElement>,
    private invoiceElementMapper: InvoiceElementMapper,
  ) {}

  async createSingle(invoiceElementDto: InvoiceElementDto) {
    try {
      const invoiceElement =
        this.invoiceElementMapper.mapCompanyDtoToEntity(invoiceElementDto);
      await this.invoiceElementRepository.save(await invoiceElement);
    } catch (err) {
      return { message: err };
    }
    return { message: 'success' };
  }

  async remove(id: string): Promise<void> {
    await this.invoiceElementRepository.delete(id);
  }

  findOne(id: string): Promise<InvoiceElement> {
    return this.invoiceElementRepository.findOne(id);
  }
}
