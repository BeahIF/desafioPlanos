import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Pessoa {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public cpf: string;

  
}

export default Pessoa;
