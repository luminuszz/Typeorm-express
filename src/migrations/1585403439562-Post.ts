import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class Post1585403439562 implements MigrationInterface {
         private table = new Table({
           name: 'posts',
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

         private foreingKey = new TableForeignKey({
           columnNames: ['user_id'],
           referencedColumnNames: ['id'],
           onDelete: 'CASCADE',
           referencedTableName: 'users'
         });

         public async up (queryRunner: QueryRunner): Promise<any> {
           queryRunner.createTable(this.table)
         }

         public async down (queryRunner: QueryRunner): Promise<any> {
           queryRunner.dropTable(this.table)
         }
}
