import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  BaseEntity
} from "typeorm";
import { User } from "./user";

@Index("userId", ["userId"], {})
@Entity("Project", { schema: "boilerplate" })
export class Project extends BaseEntity{
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "name", length: 200 })
  name: string;

  @Column("date", { name: "initDate" })
  initDate: string;

  @Column("date", { name: "endDate" })
  endDate: string;

  @Column("char", { name: "userId", length: 11 })
  userId: string;

  @ManyToOne(
    () => User,
    user => user.projects,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "userId", referencedColumnName: "cpf" }])
  user: User;
}
