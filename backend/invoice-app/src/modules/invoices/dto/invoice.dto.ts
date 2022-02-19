import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsDate, IsString } from 'class-validator';

export class InvoiceDto {
  @ApiProperty({
    description: 'Date at which the invoice was created',
    example: '2020-01-15',
  })
  @Type(() => Date)
  @IsDate()
  date: Date;

  @ApiProperty({
    description: 'Payment term in number of days',
    example: 1,
  })
  @IsOptional()
  @IsNumber()
  paymentTerm: number;

  @ApiProperty({
    description: 'Id of the account that created the invoice',
    example: '5a2ef49b-9334-4c64-acd4-9589b28e21b0',
  })
  @IsString()
  accountId: string;

  @ApiProperty({
    description: 'Id of the company receiving the invoice.',
    example: '5a2ef49b-9334-4c64-acd4-9589b28e21b0',
  })
  @IsString()
  companyId: string;
}
