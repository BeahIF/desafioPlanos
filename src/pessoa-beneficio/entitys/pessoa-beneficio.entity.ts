import Cliente from 'src/cliente/entitys/cliente.entity';
import Pessoa from 'src/pessoa/entitys/pessoa.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class PessoaBeneficio {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: true })
  public nome: string;

  @OneToOne((type) => Pessoa)
  @JoinColumn()
  public id_pessoa: number;

  @ManyToOne((type) => Cliente)
  @JoinColumn()
  public id_cliente: number;

  @Column({ nullable: true })
  public createdDate: Date;

  @Column({ nullable: true })
  public updatedDate: Date;
  @Column({ nullable: true })
  public email: string;

  @Column({ nullable: true })
  public endereco: string;
  @Column({ nullable: true })
  public peso: number;
  @Column({ nullable: true })
  public altura: number;
  @Column({ nullable: true })
  public hora_meditacao: number;
}

export default PessoaBeneficio;
