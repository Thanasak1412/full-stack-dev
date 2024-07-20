import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Post } from '../post/post.entity';

@Entity({
  name: 'user',
  comment: 'ผู้ใช้งาน',
})
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

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

  @Column({
    type: 'timestamp',
    default: () => `timezone('Asia/Bangkok'::text, now())`,
    comment: 'วันที่เข้าสู่ระบบล่าสุด',
  })
  lastLogin: string;

  @OneToMany(() => Post, (post) => post.user, { eager: true })
  posts: Post[];
}
