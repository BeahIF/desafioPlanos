import Cliente from '../../cliente/entitys/cliente.entity';
import {  Entity, JoinColumn, ManyToOne,  PrimaryGeneratedColumn } from 'typeorm';
import Planos from '../../planos/entitys/planos.entity';

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
