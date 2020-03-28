import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany

} from 'typeorm'

import Post from './Post'

@Entity()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @CreateDateColumn({
    name: 'created_at'
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'uptaded_at'
  })
  updatedAt: Date;

  @OneToMany(
    () => Post,
    post => post.userConnection
  )
  postConnetion: Promise<Post[]>;
}
