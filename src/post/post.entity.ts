import { Exclude } from 'class-transformer';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { User } from '../auth/user.entity';

@Entity({
  name: 'post',
  comment: 'โพสต์ของผู้ใช้งาน',
})
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  title: string;

  @Column('text')
  content: string;

  @Column('varchar')
  community: string;

  @Column({
    type: 'timestamp',
    default: () => `timezone('Asia/Bangkok'::text, now())`,
    comment: 'วันที่สร้างข้อมูล',
  })
  createdAt: string;

  @Column({
    type: 'timestamp',
    default: () => `timezone('Asia/Bangkok'::text, now())`,
    comment: 'วันที่แก้ไขข้อมูล',
  })
  updatedAt: string;

  @ManyToOne(() => User, (user) => user.posts)
  @Exclude({ toPlainOnly: true })
  user: User;
}
