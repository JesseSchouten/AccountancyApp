import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class CompanyDto {
  @ApiProperty({
    description: 'Name of the customer',
    example: 'Apple',
  })
  @IsString()
  name: string;

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

  @ApiProperty({
    description: 'Account Id of the customer',
    example: 'ef0402f4-81ef-4040-974b-84e67f837beb',
  })
  @IsString()
  accountId: string;
}
