import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePessoaBeneficioDto } from './dto/create-pessoa-beneficio.dto';
import PessoaBeneficio from './entitys/pessoa-beneficio.entity';

@Injectable()
export class PessoaBeneficioService {
  constructor(
    @InjectRepository(PessoaBeneficio)
    private pessoaBeneficioRepository: Repository<PessoaBeneficio>,
  ) {}

  async createPessoaBeneficio(pessoaBeneficio: CreatePessoaBeneficioDto) {
    const newPessoaBeneficio =
      this.pessoaBeneficioRepository.create(pessoaBeneficio);
    await this.pessoaBeneficioRepository.save(newPessoaBeneficio);
    return newPessoaBeneficio;

  }
}
