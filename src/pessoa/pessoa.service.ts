import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import Pessoa from './entitys/pessoa.entity';

@Injectable()
export class PessoaService {
  constructor(
    @InjectRepository(Pessoa)
    private pessoaRepository: Repository<Pessoa>,
  ){}

  async createPessoa(pessoa: CreatePessoaDto) {
    const newPessoa = await this.pessoaRepository.create(pessoa);
    await this.pessoaRepository.save(newPessoa);
    return newPessoa;

  }
}

