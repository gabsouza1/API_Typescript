import {
  Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn, Column,
  JoinColumn, ManyToOne
} from 'typeorm'

import { v4 as uuid } from 'uuid'

import { Client } from './Client'
import { Product } from './Product';

@Entity('saleOrders')
class SaleOrder {

  @PrimaryColumn()
  id: string;

  @JoinColumn({ name: 'client_id' })
  @ManyToOne(() => Client)
  client: Client;

  @Column()
  client_id: string;

  @JoinColumn({ name: 'product_id' })
  @ManyToOne(() => Product)
  product: Product;

  @Column()
  product_id: string;

  @Column()
  amount: number;

  @Column()
  saleDate: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { SaleOrder }

