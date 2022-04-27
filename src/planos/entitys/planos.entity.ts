import Cliente from 'src/cliente/entitys/cliente.entity';
import Pessoa from 'src/pessoa/entitys/pessoa.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Planos {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public nome: string;

}

export default Planos;
