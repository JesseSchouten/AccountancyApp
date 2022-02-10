import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { configService } from './config/config.service';
import { CustomersHttpModule } from './customers/customers-http.module';

@Module({
  imports: [
    CustomersModule,
    CustomersHttpModule,
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
  ],
})
export class AppModule {
  private connection: Connection;
}
