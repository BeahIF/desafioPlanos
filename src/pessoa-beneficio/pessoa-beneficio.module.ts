import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Pessoa from 'src/pessoa/entitys/pessoa.entity';
import PlanoOferecido from 'src/plano-oferecido/entitys/plano-oferecido.entity';
import PessoaBeneficio from './entitys/pessoa-beneficio.entity';
import { PessoaBeneficioController } from './pessoa-beneficio.controller';
import { PessoaBeneficioService } from './pessoa-beneficio.service';

@Module({
    imports: [TypeOrmModule.forFeature([PessoaBeneficio, PlanoOferecido, Pessoa])],
    providers: [PessoaBeneficioService],
  controllers: [PessoaBeneficioController],
})
export class PessoaBeneficioModule {}
