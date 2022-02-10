import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { CustomersService } from './customers.service';
import { ApiTags } from '@nestjs/swagger';
import { Customer } from './entity/customer.entity';
import { CustomerDto } from './dto/customer.dto';

@ApiTags('Invoices')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  //  handleCustomer(@Body(new ValidationPipe()) customerDto: CustomerDto) {
  @Post('/customer')
  @ApiCreatedResponse({
    status: 201,
    description: 'Customer succesfully logged.',
  })
  handleCustomer(
    @Body(new ValidationPipe())
    customerDto: CustomerDto,
  ) {
    const customer = new Customer();
    customer.customerName = customerDto.customerName;
    customer.address = customerDto.address;
    customer.zipCode = customerDto.zipCode;
    customer.vatNumber = customerDto.vatNumber;
    return this.customersService.created(customer);
  }
}
