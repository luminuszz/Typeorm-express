import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm'

import User from './User'
@Entity()
export default class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 150
  })
  title: string;

  @Column({
    length: 1000
  })
  description: string;

  @Column({
    type: Boolean,
    default: false
  })
  isPublished: boolean;

  @CreateDateColumn({
    name: 'created_at'
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'uptaded_at'
  })
  updatedAt: Date;

  @ManyToOne(
    type => User,
    user => user.posts

  )
  user: User;
}
