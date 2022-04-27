import { Module } from '@nestjs/common';
import { PlanoOferecidoService } from './plano-oferecido.service';
import { PlanoOferecidoController } from './plano-oferecido.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import PlanoOferecido from './entitys/plano-oferecido.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlanoOferecido])],

  providers: [PlanoOferecidoService],
  controllers: [PlanoOferecidoController]
})
export class PlanoOferecidoModule {}
