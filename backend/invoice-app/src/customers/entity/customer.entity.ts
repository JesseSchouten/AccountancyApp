import { Optional } from '@nestjs/common';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryColumn()
  customerName: string;

  @Column()
  address: string;

  @Column()
  zipCode: string;

  @Column()
  vatNumber: string;
}
