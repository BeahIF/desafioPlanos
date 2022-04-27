import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';

@Controller('cliente')
export class ClienteController {
    constructor(private clienteService:ClienteService){}

    
  @Get()
  getAllPessoas() {
    // return this.clienteService.getAllPessoas();
  }

  
  @Get(':id')
  getPostById(@Param('id') id: string) {
    // return this.clienteService.getPessoaById(Number(id));
  }
 

  
  @Post()
  async createPessoa(@Body() post: CreateClienteDto) {
      return this.clienteService.createCliente(post);
   
  }
 
  @Put(':id')
  async replacePessoa(@Param('id') id: string, @Body() post) {
    // return this.clienteService.replacePessoa(Number(id), post);
  }
 
  @Delete(':id')
  async deletePessoa(@Param('id') id: string) {
    // this.clienteService.deletePessoa(Number(id));
  }
}
