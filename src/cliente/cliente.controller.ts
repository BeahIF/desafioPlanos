import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';

@Controller('cliente')
export class ClienteController {
    constructor(private clienteService:ClienteService){}

    
  @Get()
  getAllClientes() {
    return this.clienteService.getAllClientes();
  }

  
  @Get(':id')
  getClienteById(@Param('id') id: string) {
    return this.clienteService.getClienteById(Number(id));
  }
 

  
  @Post()
  async createCliente(@Body() post: CreateClienteDto) {
      return this.clienteService.createCliente(post);
   
  }
 
  @Put(':id')
  async updateCliente(@Param('id') id: string, @Body() cliente) {
    return this.clienteService.updateCliente(Number(id), cliente);
  }
 
  @Delete(':id')
  async deleteCliente(@Param('id') id: string) {
    return this.clienteService.deleteCliente(Number(id));
  }
}
