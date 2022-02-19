import { ApiProperty } from '@nestjs/swagger';
import { Account } from '../../../modules/accounts/entity/account.entity';
import { Company } from '../../../modules/companies/entity/company.entity';
import { InvoiceElement } from '../../../modules/invoice-elements/entity/invoice-element.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    description: 'date of sending the vacancy',
    example: '2021-01-01',
  })
  @Column()
  date: Date;

  @ApiProperty({
    description: 'payment term of the corresponding vacancy in days',
    example: '15',
  })
  @Column({ default: 15 })
  paymentTerm: number = 15;

  @ApiProperty({})
  @ManyToOne(() => Account, (account) => account.id)
  @JoinColumn({ name: 'accountId' })
  account: Account;

  @ApiProperty({
    description: 'id of the company receiving the invoice.',
  })
  @OneToOne(() => Company, (company) => company.id)
  @JoinColumn({ name: 'companyId' })
  company: Company;

  @OneToMany(() => InvoiceElement, (invoiceElement) => invoiceElement.id)
  invoiceElement: InvoiceElement[];
}
