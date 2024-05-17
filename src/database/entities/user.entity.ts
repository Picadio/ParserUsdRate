import { Entity, Column } from 'typeorm';
@Entity()
export class User {
  @Column({ primary: true, generated: "uuid", type: "uuid" })
  id!: string;
  @Column({unique: true, type: "text"})
  email: string
}
