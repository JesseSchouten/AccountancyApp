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

@ApiTags('Invoices')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  //  handleCustomer(@Body(new ValidationPipe()) customerDto: CustomerDto) {
  @Post()
  @ApiCreatedResponse({
    status: 201,
    description: 'Customer succesfully logged.',
  })
  handleCustomer() {
    return this.customersService.created();
  }

  @Get(':id')
  getCustomer(@Param() params) {
    return this.customersService.getCustomers(params.id);
  }
}
