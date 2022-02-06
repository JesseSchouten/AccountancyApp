import { CustomersService } from './customers.service';
export declare class CustomersController {
    private readonly customersService;
    constructor(customersService: CustomersService);
    handleCustomer(): string;
    getCustomer(params: any): Promise<import("./entity/customers.entity").Customers[]>;
}
