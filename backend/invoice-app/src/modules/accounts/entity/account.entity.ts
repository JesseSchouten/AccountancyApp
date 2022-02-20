import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { Company } from '../../../modules/companies/entity/company.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Invoice } from '../../../modules/invoices/entity/invoice.entity';

@Entity()
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'jesse',
  })
  @Column()
  userName: string;

  @ApiProperty({
    example: 'd81ee81dee73b38eaa77f03fd53f66777c675c69c40adc6b1e316d57dbd36ba6',
  })
  @Column()
  password: string;

  @ApiProperty({
    example: 'Apple',
  })
  @Column()
  companyName: string;

  @ApiProperty({
    example: 'Leidseplein 25',
  })
  @Column()
  address: string;

  @ApiProperty({
    example: '1017 PS Amsterdam',
  })
  @Column()
  zipCode: string;

  @ApiProperty({
    example: 'NL259762352B01',
  })
  @Column({ nullable: true })
  vatNumber: string;

  @ApiProperty({
    example: '21771537',
  })
  @Column({ nullable: true })
  kvkNumber: number;

  @ApiProperty({
    example: 'Alkmaar',
  })
  @Column({ nullable: true })
  kvkOriginCity: string;

  @ApiProperty({
    example: 'ABNANL2ANL02ABNA0123456789',
  })
  @Column({ nullable: true })
  iban: string;

  @ApiProperty({
    example: 'test@outlook.com',
  })
  @Column({ unique: true })
  email: string;

  @ApiProperty({
    example: '+3157423456',
  })
  @Column()
  phone: string;

  @ApiProperty({
    example: '0640291135',
  })
  @Column({ nullable: true })
  mobile: string;

  @OneToMany(() => Company, (company) => company.account)
  company: Company[];

  @OneToMany(() => Invoice, (invoice) => invoice.account)
  invoice: Invoice[];
}
