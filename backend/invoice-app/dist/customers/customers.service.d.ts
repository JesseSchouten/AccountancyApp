import { Repository } from 'typeorm';
import { Customers } from './entity/customers.entity';
export declare class CustomersService {
    private customersRepository;
    constructor(customersRepository: Repository<Customers>);
    created(): string;
    getCustomers(_id: number): Promise<Customers[]>;
}
