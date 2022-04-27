import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async getAllPessoas() {
    return this.pessoaRepository.find();
  }

  async getPessoaById(id:number){
    const pessoa = await this.pessoaRepository.findOne(id)
    if (pessoa) {
      return pessoa;
    }
    throw new HttpException('Pessoa não encontrado', HttpStatus.NOT_FOUND);
  }


  async updatePessoa(id: number, pessoa) {
    await this.pessoaRepository.update(id, pessoa);
    const updatedPessoa = await this.pessoaRepository.findOne(id);
    if (updatedPessoa) {
      return updatedPessoa
    }
    throw new HttpException('Pessoa não encontrado', HttpStatus.NOT_FOUND);
  }

  async deletePessoa(id: number) {
    const deleteResponse = await this.pessoaRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException('Pessoa não encontrado', HttpStatus.NOT_FOUND);
    }
  }   
}

