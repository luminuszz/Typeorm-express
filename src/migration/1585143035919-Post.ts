/* eslint-disable @typescript-eslint/no-explicit-any */
import * as typeorm from 'typeorm'
// MigrationInterface, QueryRunner, Table
export class Post1585143035919 implements typeorm.MigrationInterface {
         private table = new typeorm.Table({
           name: 'users',
           columns: [
             {
               name: 'id',
               type: 'interger',
               isPrimary: true,
               isUnique: true,
               isGenerated: true, // autoIncrement
               generationStrategy: 'increment'
             },
             {
               name: 'title',
               type: 'varchar',
               length: '100',
               isNullable: false

             },
             {
               name: 'description',
               type: 'varchar',
               length: '800',
               isNullable: false

             },
             {
               name: 'is_puublished',
               type: 'boolean',
               isNullable: false

             },
             {
               name: 'created_at',
               type: 'timestampz',
               isNullable: false,
               default: 'now()'
             },
             {
               name: 'updated_at',
               type: 'timestampz',
               isNullable: false,
               default: 'now()'
             }
           ]
         });

         public async up (queryRunner: typeorm.QueryRunner): Promise<any> {
           await queryRunner.createTable(this.table)
         }

         public async down (queryRunner: typeorm.QueryRunner): Promise<any> {
           await queryRunner.dropTable(this.table)
         }
}
