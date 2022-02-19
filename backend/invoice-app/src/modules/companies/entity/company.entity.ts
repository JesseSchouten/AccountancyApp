import { ApiProperty } from '@nestjs/swagger';
import { Account } from '../../../modules/accounts/entity/account.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Invoice } from '../../../modules/invoices/entity/invoice.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'Apple',
  })
  @Column()
  name: string;

  @ApiProperty({})
  @ManyToOne(() => Account, (account) => account.id)
  @JoinColumn({ name: 'accountId' })
  account: Account;

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
  @Column()
  vatNumber: string;

  @ApiProperty({})
  @OneToOne(() => Invoice, (invoice) => invoice.id)
  invoice: Invoice[];
}
