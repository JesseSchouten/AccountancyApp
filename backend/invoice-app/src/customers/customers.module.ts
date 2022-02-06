import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customers } from './entity/customers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customers])],
  exports: [TypeOrmModule],
})
export class CustomersModule {}
