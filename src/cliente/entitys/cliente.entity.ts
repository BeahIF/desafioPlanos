import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Cliente {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public nome: string;

  
}

export default Cliente;
