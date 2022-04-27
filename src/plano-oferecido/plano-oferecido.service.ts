import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlanoOferecidoDto } from './dto/create-plano-oferecido.dto';
import PlanoOferecido from './entitys/plano-oferecido.entity';

@Injectable()
export class PlanoOferecidoService {
    constructor(@InjectRepository(PlanoOferecido)
    private planoOferecidoRepository: Repository<PlanoOferecido>){}

    
  async createPlanoOferecido(planoOferecido: CreatePlanoOferecidoDto) {
    const newPlanoOferecido = await this.planoOferecidoRepository.create(
      planoOferecido,
    );
    await this.planoOferecidoRepository.save(newPlanoOferecido);
    return newPlanoOferecido;

  }
    
}
