import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Account } from '../../accounts/entity/account.entity';
import { Currency } from '../../../general.enum';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Invoice } from '../../../modules/invoices/entity/invoice.entity';

@Entity()
export class InvoiceElement {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({})
  @ManyToOne(() => Invoice, (invoice) => invoice.id)
  @JoinColumn({ name: 'invoiceId' })
  invoice: Invoice;

  @ApiProperty({
    description: 'description of the element requiring payment',
    example: 'hours of labour',
  })
  description: string;

  @ApiProperty({
    description: '',
    example: 15,
  })
  @Column()
  quantity: number;

  @ApiProperty({
    description: '',
    example: 15.0,
  })
  @Column('money')
  ratePerQuantity: number;

  @ApiProperty({
    description: '',
    example: 'EUR',
  })
  @Column()
  currency: Currency;

  @ApiProperty({
    description: '',
    example: 1.21,
  })
  @Column('decimal', {
    default: 1.21,
    precision: 27,
    scale: 4,
  })
  vatPercentage: number = 1.21;

  @ApiProperty({
    description:
      'Whether to add VAT to the invoice, when true, we do not require a VAT payment.',
    example: false,
  })
  @Column({
    default: false,
  })
  shiftVat: boolean;
}
