import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Users1746114931449 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'googleId',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'access_token',
                        type: 'varchar',
                        isNullable: true,
                      },
                      {
                        name: 'refresh_token',
                        type: 'varchar',
                        isNullable: true,
                      },
                      {
                        name: 'token_type',
                        type: 'varchar',
                        isNullable: true,
                      },
                      {
                        name: 'scope',
                        type: 'varchar',
                        isNullable: true,
                      },
                      {
                        name: 'expiry_date',
                        type: 'bigint',
                        isNullable: true,
                      },
                ]
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
