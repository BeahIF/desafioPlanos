import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Planos {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: true })
  public nome: string;

  @OneToOne((type) => Pessoa)
  @JoinColumn()
  public id_pessoa: number;

  @OneToOne((type) => Cliente)
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
  public peso: string;
  @Column({ nullable: true })
  public altura: string;
  @Column({ nullable: true })
  public hora_meditacao: string;
}

export default Planos;
