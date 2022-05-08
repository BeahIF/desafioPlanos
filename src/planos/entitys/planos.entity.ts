
import { Column, Entity,  PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Planos {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public nome: string;

}

export default Planos;
