import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customers } from './entity/customers.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customers)
    private customersRepository: Repository<Customers>,
  ) {}

  created() {
    return 'This ads a new customer to the db.';
  }

  async getCustomers(_id: number): Promise<Customers[]> {
    return await this.customersRepository.find({
      select: ['customer_name'],
      where: [{ id: _id }],
    });
  }
}
