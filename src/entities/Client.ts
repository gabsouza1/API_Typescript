import { v4 as uuid } from 'uuid'

import { 
    Column,
    CreateDateColumn,
    Entity, PrimaryColumn, UpdateDateColumn,

} from 'typeorm'


@Entity('clients')
class Client {
    
    @PrimaryColumn()
    id: string;
    
    @Column()
    name: string;

    @Column()
    telephone: string;

    @UpdateDateColumn()
    updated_At: Date;

    @CreateDateColumn()
    created_At: Date;


    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}


export { Client }