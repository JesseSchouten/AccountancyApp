import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customer_name: string;

  @Column()
  address: string;

  @Column()
  zipCode: boolean;

  @Column()
  varNumber: boolean;
}
