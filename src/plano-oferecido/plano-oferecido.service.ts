import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    
  async getAllPlanoOferecidos() {
    return this.planoOferecidoRepository.find();
  }

  async getPlanoOferecidoById(id:number){
    const planoOferecido = await this.planoOferecidoRepository.findOne(id)
    if (planoOferecido) {
      return planoOferecido;
    }
    throw new HttpException(
      'Plano Oferecido não encontrado',
      HttpStatus.NOT_FOUND,
    );
  }


  async updatePlanoOferecido(id: number, pessoa) {
    await this.planoOferecidoRepository.update(id, pessoa);
    const updatedPlanoOferecido = await this.planoOferecidoRepository.findOne(id);
    if (updatedPlanoOferecido) {
      return updatedPlanoOferecido
    }
    throw new HttpException('Plano Oferecido não encontrado', HttpStatus.NOT_FOUND);
  }

  async deletePlanoOferecido(id: number) {
    const deleteResponse = await this.planoOferecidoRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException('Plano Oferecido não encontrado', HttpStatus.NOT_FOUND);
    }
  } 
}
