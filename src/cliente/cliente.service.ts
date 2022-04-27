import { Injectable } from '@nestjs/common';
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

  async createCliente(cliente: CreateClienteDto) {
    const newCliente = await this.clienteRepository.create(cliente);
    await this.clienteRepository.save(newCliente);
    return newCliente;
  }
}
