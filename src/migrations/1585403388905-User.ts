import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class User1585403388905 implements MigrationInterface {
         private table = new Table({
           name: 'users',
           columns: [
             {
               name: 'id',
               type: 'interger',
               isGenerated: true,
               isPrimary: true,
               isUnique: true,
               generationStrategy: 'increment'
             },
             {
               name: 'email',
               type: 'varchar',
               length: '150',
               isUnique: true,
               isNullable: false
             },
             {
               name: 'name',
               type: 'varchar',
               length: ' 100',
               isNullable: false,
               isUnique: false
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

         public async up (queryRunner: QueryRunner): Promise<any> {
           queryRunner.createTable(this.table)
         }

         public async down (queryRunner: QueryRunner): Promise<any> {
           queryRunner.dropTable(this.table)
         }
}
