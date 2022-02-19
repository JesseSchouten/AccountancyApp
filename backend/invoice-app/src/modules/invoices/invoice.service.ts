import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Invoice } from './entity/invoice.entity';
import { Connection, Repository } from 'typeorm';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice)
    private invoiceRepository: Repository<Invoice>,
  ) {}

  async createSingle(invoice: Invoice) {
    //Do retries heres
    try {
      await this.invoiceRepository.save(invoice);
    } catch (err) {
      return { message: err };
    }
    return { message: 'success' };
  }

  findOne(id: string): Promise<Invoice> {
    return this.invoiceRepository.findOne(id);
  }
}
