import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsOptional,
  IsEnum,
  IsBoolean,
} from 'class-validator';
import { Currency } from '../../../general.enum';

export class InvoiceElementDto {
  @ApiProperty({
    description: 'ID of the invoice corresponding to the element',
    example: '5a2ef49b-9334-4c64-acd4-9589b28e21b0',
  })
  @IsString()
  invoiceId: string;

  @ApiProperty({
    description: 'Description of the cost element.',
    example: 'hours of labour',
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'Quantity of the cost element.',
    example: 1,
  })
  @IsNumber()
  quantity: number;

  @ApiProperty({
    description: 'Price per unit.',
    example: '15.50',
  })
  @IsNumber()
  ratePerQuantity: number;

  @ApiProperty({
    description: 'Currency of the invoice prices.',
    example: Currency.EUR,
  })
  @IsEnum(Currency)
  currency: Currency;

  @ApiProperty({
    description: 'Percentage of VAT used in this invoice.',
    example: '21',
    default: 21,
  })
  @IsOptional()
  @IsNumber()
  vatPercentage?: number;

  @ApiProperty({
    description: 'Whether to include the VAT or shift it to the receiver',
    example: false,
    default: false,
  })
  @IsOptional()
  @IsBoolean()
  shiftVat?: boolean;
}
