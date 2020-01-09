import { Column, Entity, OneToMany, PrimaryGeneratedColumn, BaseEntity } from "typeorm";
import { User } from "./user";

@Entity("Address", { schema: "boilerplate" })
export class Address extends BaseEntity{
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("int", { name: "number" })
  number: number;

  @Column("varchar", { name: "street", length: 100 })
  street: string;

  @Column("varchar", { name: "neighborhood", length: 100 })
  neighborhood: string;

  @Column("varchar", { name: "city", length: 100 })
  city: string;

  @Column("varchar", { name: "state", length: 100 })
  state: string;

  @Column("varchar", { name: "country", length: 100 })
  country: string;

  @Column("varchar", { name: "zipCode", length: 8 })
  zipCode: string;

  @OneToMany(
    () => User,
    user => user.address
  )
  users: User[];
}
