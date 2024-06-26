import { Entity, PrimaryGeneratedColumn, OneToMany, OneToOne, Column} from 'typeorm';

import { User } from '@user/user.entity';
import { Role } from '@enums/role';

@Entity()
export class Admin extends User{
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: "enum", enum: Role, default: Role.ADMIN })
  role?: Role;
  
 
}