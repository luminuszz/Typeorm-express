import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export default class Post {
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

  @Column()
  isPublished: boolean;
}
