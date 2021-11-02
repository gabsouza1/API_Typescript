import {
  Column,
  CreateDateColumn,
  Entity, PrimaryColumn, UpdateDateColumn,
} from 'typeorm'

import { v4 as uuid } from 'uuid'

@Entity('products')
class Product {

  @PrimaryColumn()
  id: string;

  @Column()
  product: string;

  @Column()
  unitMeasurement: string;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Product }