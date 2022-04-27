import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Cliente from 'src/cliente/entitys/cliente.entity';
import Pessoa from 'src/pessoa/entitys/pessoa.entity';
import PlanoOferecido from 'src/plano-oferecido/entitys/plano-oferecido.entity';
import { Repository } from 'typeorm';
import { CreatePessoaBeneficioDto } from './dto/create-pessoa-beneficio.dto';
import PessoaBeneficio from './entitys/pessoa-beneficio.entity';

@Injectable()
export class PessoaBeneficioService {
  constructor(
    @InjectRepository(PessoaBeneficio)
    private pessoaBeneficioRepository: Repository<PessoaBeneficio>,
    @InjectRepository(PlanoOferecido)
    private planoOferecidoRepository: Repository<PlanoOferecido>,
    @InjectRepository(Pessoa)
    private pessoaRepository: Repository<Pessoa>,
  ) {}
  removeFalsyValuesInObject = (data) => {
    const keys = Object.keys(data);

    const correctData = keys.reduce((accumulator, currentValue) => {
      if (data[currentValue])
        return { ...accumulator, [currentValue]: data[currentValue] };

      return accumulator;
    }, {});

    return correctData;
  };

  async createPessoaBeneficio(pessoaBeneficio: CreatePessoaBeneficioDto) {
    const planosOferecidos = await this.planoOferecidoRepository.find({
      where: { id_cliente: pessoaBeneficio?.id_cliente },
    });
    //Aqui vai as regras de cada plano:
    for await (const i of planosOferecidos) {
      if (i?.id == 1) {
        //nome-cpf-data-email
        if (pessoaBeneficio?.nome && pessoaBeneficio?.email) {
          const newPessoaBeneficio = this.pessoaBeneficioRepository.create({
            nome: pessoaBeneficio?.nome,
            email: pessoaBeneficio?.email,
            createdDate: new Date(),
          });
          await this.pessoaBeneficioRepository.save(newPessoaBeneficio);
          const pessoa = await this.pessoaRepository.find({
            where: { id: pessoaBeneficio?.id_pessoa },
          });

          return this.removeFalsyValuesInObject({
            ...newPessoaBeneficio,
            pessoa,
          });
        } else {
          throw new HttpException(
            'Você não está enviando as informações necessárias para os planos oferecidos desse cliente',
            HttpStatus.NOT_FOUND,
          );
        }
      }
      if (i?.id == 2) {
        //nome, cpf, data, endereço
        if (pessoaBeneficio?.nome && pessoaBeneficio?.endereco) {
          const newPessoaBeneficio = this.pessoaBeneficioRepository.create({
            nome: pessoaBeneficio?.nome,
            endereco: pessoaBeneficio?.endereco,
            createdDate: new Date(),
          });
          await this.pessoaBeneficioRepository.save(newPessoaBeneficio);
          const pessoa = await this.pessoaRepository.find({
            where: { id: pessoaBeneficio?.id_pessoa },
          });

          return this.removeFalsyValuesInObject({
            ...newPessoaBeneficio,
            pessoa,
          });
        } else {
          throw new HttpException(
            'Você não está enviando as informações necessárias para os planos oferecidos desse cliente',
            HttpStatus.NOT_FOUND,
          );
        }
      }
      if (i?.id == 3) {
        //nome, cpf, peso, altura
        if (
          pessoaBeneficio?.nome &&
          pessoaBeneficio?.peso &&
          pessoaBeneficio?.altura
        ) {
          const newPessoaBeneficio = this.pessoaBeneficioRepository.create({
            nome: pessoaBeneficio?.nome,
            peso: pessoaBeneficio?.peso,
            altura: pessoaBeneficio?.altura,
          });
          await this.pessoaBeneficioRepository.save(newPessoaBeneficio);
          const pessoa = await this.pessoaRepository.find({
            where: { id: pessoaBeneficio?.id_pessoa },
          });

          return this.removeFalsyValuesInObject({
            ...newPessoaBeneficio,
            pessoa,
          });
        } else {
          throw new HttpException(
            'Você não está enviando as informações necessárias para os planos oferecidos desse cliente',
            HttpStatus.NOT_FOUND,
          );
        }
      }
      if (i?.id == 4) {
        // cpf, horas_meditacao
        if (pessoaBeneficio?.hora_meditacao) {
          const newPessoaBeneficio = this.pessoaBeneficioRepository.create({
            hora_meditacao: pessoaBeneficio?.hora_meditacao,
          });
          await this.pessoaBeneficioRepository.save(newPessoaBeneficio);
          const pessoa = await this.pessoaRepository.find({
            where: { id: pessoaBeneficio?.id_pessoa },
          });

          return this.removeFalsyValuesInObject({
            ...newPessoaBeneficio,
            pessoa,
          });
        } else {
          throw new HttpException(
            'Você não está enviando as informações necessárias para os planos oferecidos desse cliente',
            HttpStatus.NOT_FOUND,
          );
        }
      }
    }
  }

  async getAllPessoaBeneficio() {
    return this.pessoaBeneficioRepository.find();
  }

  async getPessoaBeneficioById(id:number){
    const pessoaBeneficio = await this.pessoaBeneficioRepository.findOne(id)
    if (pessoaBeneficio) {
      return pessoaBeneficio;
    }
    throw new HttpException('Beneficio não encontrado', HttpStatus.NOT_FOUND);
  }


  async updatePessoaBeneficio(id: number, pessoa) {
    await this.pessoaBeneficioRepository.update(id, pessoa);
    const updatedPessoaBenenficio = await this.pessoaBeneficioRepository.findOne(id);
    if (updatedPessoaBenenficio) {
      return updatedPessoaBenenficio
    }
    throw new HttpException('Beneficio não encontrado', HttpStatus.NOT_FOUND);
  }

  async deletePessoaBeneficio(id: number) {
    const deleteResponse = await this.pessoaBeneficioRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException('Beneficio não encontrado', HttpStatus.NOT_FOUND);
    }
  }   
}
