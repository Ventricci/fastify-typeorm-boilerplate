import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  BaseEntity
} from "typeorm";
import { Project } from "./project";
import { Address } from "./address";

@Index("addressId", ["addressId"], {})
@Entity("User", { schema: "boilerplate" })
export class User extends BaseEntity{
  @Column("char", { primary: true, name: "cpf", length: 11 })
  cpf: string;

  @Column("varchar", { name: "name", length: 200 })
  name: string;

  @Column("enum", { name: "sex", enum: ["M", "F"] })
  sex: "M" | "F";

  @Column("date", { name: "birth" })
  birth: string;

  @Column("bigint", { name: "addressId" })
  addressId: string;

  @OneToMany(
    () => Project,
    project => project.user
  )
  projects: Project[];

  @ManyToOne(
    () => Address,
    address => address.users,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "addressId", referencedColumnName: "id" }])
  address: Address;
}
