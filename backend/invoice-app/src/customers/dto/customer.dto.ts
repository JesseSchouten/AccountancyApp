import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CustomerDto {
  @ApiProperty({
    description: 'Name of the customer',
    example: 'Apple',
  })
  @IsString()
  customerName: string;

  @ApiProperty({
    description: 'address of the customer',
    example: 'Leidseplein 25',
  })
  @IsString()
  address: string;

  @ApiProperty({
    description: 'zip code and address of the customer',
    example: '1017 PS Amsterdam',
  })
  @IsString()
  zipCode: string;

  @ApiProperty({
    description: 'VAT number of the customer',
    example: 'BTW NL637462350B01',
  })
  @IsOptional()
  @IsString()
  vatNumber?: string;
}
