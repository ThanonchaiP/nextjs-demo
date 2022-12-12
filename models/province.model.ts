import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "provinces" })
export class Province {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;
}
