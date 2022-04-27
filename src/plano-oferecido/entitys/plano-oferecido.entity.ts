import Planos from 'src/planos/entitys/planos.entity';
import Cliente from 'src/cliente/entitys/cliente.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class PlanoOferecido {
  @PrimaryGeneratedColumn()
  public id: number;

  
  @ManyToOne((type) => Cliente)
  @JoinColumn()
  public id_cliente: number;

  
  @ManyToOne((type) => Planos)
  @JoinColumn()
  public id_plano: number;

  
}

export default PlanoOferecido;
