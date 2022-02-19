import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InvoiceElement } from './entity/invoice-element.entity';
import { Connection, Repository } from 'typeorm';

@Injectable()
export class InvoiceElementService {
  constructor(
    @InjectRepository(InvoiceElement)
    private invoiceElementRepository: Repository<InvoiceElement>,
  ) {}

  async createSingle(invoiceElement: InvoiceElement) {
    //Do retries heres
    try {
      await this.invoiceElementRepository.save(invoiceElement);
    } catch (err) {
      return { message: err };
    }
    return { message: 'success' };
  }

  findOne(id: string): Promise<InvoiceElement> {
    return this.invoiceElementRepository.findOne(id);
  }
}
