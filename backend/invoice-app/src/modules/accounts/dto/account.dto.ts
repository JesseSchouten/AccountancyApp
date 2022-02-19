import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsEmail, IsNumber } from 'class-validator';

export class AccountDto {
  @ApiProperty({
    description: 'Name used to login to the platform.',
    example: 'jesse',
  })
  @IsString()
  userName: string;

  @ApiProperty({
    description: 'unhashed password used to login to the platform.',
    example: 'password',
  })
  @IsString()
  password: string;

  @ApiProperty({
    description: 'Name of the company corresponding to the account.',
    example: 'Apple',
  })
  @IsString()
  companyName: string;

  @ApiProperty({
    description: 'Address + number.',
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
    example: 'NL637462350B01',
  })
  @IsOptional()
  @IsString()
  vatNumber?: string;

  @ApiProperty({
    description: 'KvK number (in dutch)',
    example: '21771537',
  })
  @IsOptional()
  @IsNumber()
  kvkNumber: number;

  @ApiProperty({
    description: 'KvK city of origin',
    example: 'Alkmaar',
  })
  @IsOptional()
  @IsString()
  kvkOriginCity: string;

  @ApiProperty({
    description: 'IBAN number',
    example: 'ABNANL2ANL02ABNA0123456789',
  })
  @IsOptional()
  @IsString()
  iban: string;

  @ApiProperty({
    description: 'IBAN number',
    example: 'jesse@outlook.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Phone number',
    example: '+31636363634',
  })
  @IsString()
  phone: string;

  @ApiProperty({
    description: 'Mobile number',
    example: '0640291135',
  })
  @IsOptional()
  @IsString()
  mobile: string;
}
