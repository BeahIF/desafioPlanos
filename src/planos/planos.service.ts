import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlanosDto } from './dto/create-plano.dto';
import Planos from './entitys/planos.entity';

@Injectable()
export class PlanosService {
    constructor(@InjectRepository(Planos)
    private planosRepository: Repository<Planos>){}

    
  async createPlanos(planos: CreatePlanosDto) {
    const newPlanos = await this.planosRepository.create(planos);
    await this.planosRepository.save(newPlanos);
    return newPlanos;

  }
    
}
