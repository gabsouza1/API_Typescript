import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateClients1635774852429 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: "clients",
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },

                    {
                        name: 'name',
                        type: 'varchar'

                    },

                    {
                        name: 'telephone',
                        type: 'varchar',
                    },

                    {
                        name: 'email',
                        type: 'varchar'
                    },

                    {
                        name: 'updated_At',
                        type: 'timestamp',
                        default: 'now()'
                    },

                    {
                        name: 'created_At',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('clients')
    }

}


/* 
    yarn typeorm migration:create -n createClients
*/

