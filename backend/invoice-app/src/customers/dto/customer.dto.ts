import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsEnum,
  IsOptional,
  IsUUID,
  IsIP,
  IsNumber,
} from 'class-validator';

export class CustomerDto {
  @ApiProperty({ type: String, description: 'Name of the customer' })
  @IsString()
  name: string;

  @ApiProperty({ type: Number, description: 'address of the customer' })
  @IsNumber()
  address: number;

  @ApiProperty({ type: String, description: 'zip code of the customer' })
  @IsString()
  zipCode: string;

  @ApiProperty({ type: String, description: 'VAT number of the customer' })
  @IsString()
  vatNumber: string;
}
