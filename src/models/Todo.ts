import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('todo-entry')
export class TodoEntry {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  expiration: Date;

  @Column("timestamp", {
    default: () => "CURRENT_TIMESTAMP"
  })
  createdOn: Date;

  @Column("timestamp", {
    default: () => "CURRENT_TIMESTAMP"
  })
  updatedOn: Date;
}