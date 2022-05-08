import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlanosDto } from './dto/create-plano.dto';
import Planos from './entitys/planos.entity';

@Injectable()
export class PlanosService {
  constructor(
    @InjectRepository(Planos)
    private planosRepository: Repository<Planos>,
  ) {}

  async createPlanos(planos: CreatePlanosDto) {
    const newPlanos = await this.planosRepository.create(planos);
    await this.planosRepository.save(newPlanos);
    return newPlanos;
  }

  async getAllPlanos() {
    return this.planosRepository.find();
  }

  async getPlanoById(id: number) {
    const pessoa = await this.planosRepository.findOne(id);
    if (pessoa) {
      return pessoa;
    }
    throw new HttpException('Plano não encontrado', HttpStatus.NOT_FOUND);
  }

  async updatePlano(id: number, pessoa) {
    await this.planosRepository.update(id, pessoa);
    const updatedPlano = await this.planosRepository.findOne(id);
    if (updatedPlano) {
      return updatedPlano;
    }
    throw new HttpException('Plano não encontrado', HttpStatus.NOT_FOUND);
  }

  async deletePlano(id: number) {
    const plano = await this.planosRepository.findOne(id);
    if (plano) {
      await this.planosRepository.delete(id);
    } else {
      throw new HttpException('Plano não encontrado', HttpStatus.NOT_FOUND);
    }
  }
}
