import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { PessoaService } from './pessoa.service';

@Controller('pessoa')
export class PessoaController {
    constructor(private pessoaService: PessoaService){}

    
  @Get()
  getAllPessoas() {
    // return this.pessoaService.getAllPessoas();
  }

  
  @Get(':id')
  getPostById(@Param('id') id: string) {
    // return this.pessoaService.getPessoaById(Number(id));
  }
 

  
  @Post()
  async createPessoa(@Body() post: CreatePessoaDto) {
      return this.pessoaService.createPessoa(post);
   
  }
 
  @Put(':id')
  async replacePessoa(@Param('id') id: string, @Body() post) {
    // return this.pessoaService.replacePessoa(Number(id), post);
  }
 
  @Delete(':id')
  async deletePessoa(@Param('id') id: string) {
    // this.pessoaService.deletePessoa(Number(id));
  }
}
