import { Module } from '@nestjs/common';
import { CustomersModule } from './customers.module';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';

@Module({
  imports: [CustomersModule],
  providers: [CustomersService],
  controllers: [CustomersController],
})
export class CustomersHttpModule {}
