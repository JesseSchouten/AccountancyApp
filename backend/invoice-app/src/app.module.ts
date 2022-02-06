import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [CustomersModule, TypeOrmModule.forRoot()],
})
export class AppModule {
  private connection: Connection;
}
