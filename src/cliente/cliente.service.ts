import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
import Cliente from './entitys/cliente.entity';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}

  async getAllClientes() {
    return this.clienteRepository.find();
  }

  async getClienteById(id: number) {
    const cliente = await this.clienteRepository.findOne(id);
    if (cliente) {
      return cliente;
    }
    throw new HttpException('Cliente não encontrado', HttpStatus.NOT_FOUND);
  }

  async createCliente(cliente: CreateClienteDto) {
    const newCliente = this.clienteRepository.create(cliente);
    await this.clienteRepository.save(newCliente);
    return newCliente;
  }

  async updateCliente(id: number, cliente) {
    await this.clienteRepository.update(id, cliente);
    const updatedCliente = await this.clienteRepository.findOne(id);
    if (updatedCliente) {
      return updatedCliente;
    }
    throw new HttpException('Cliente não encontrado', HttpStatus.NOT_FOUND);
  }

  async deleteCliente(id: number) {
    const cliente = await this.clienteRepository.findOne(id);
    if (cliente) {
      await this.clienteRepository.delete(id);
    } else {
      throw new HttpException('Cliente não encontrado', HttpStatus.NOT_FOUND);
    }
  }
}
