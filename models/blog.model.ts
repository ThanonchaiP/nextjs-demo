import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user.model";

@Entity({ name: "blogs" })
export class Blog {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  topic!: string;

  @ManyToOne(() => User, (user) => user.blog)
  user!: User;
}
