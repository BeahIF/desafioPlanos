import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { PessoaService } from './pessoa.service';

@Controller('pessoa')
export class PessoaController {
    constructor(private pessoaService: PessoaService){}

    
  @Get()
  getAllPessoas() {
    return this.pessoaService.getAllPessoas();
  }

  
  @Get(':id')
  getPessoaById(@Param('id') id: string) {
    return this.pessoaService.getPessoaById(Number(id));
  }
 

  
  @Post()
  async createPessoa(@Body() post: CreatePessoaDto) {
      return this.pessoaService.createPessoa(post);
   
  }
 
  @Put(':id')
  async updatePessoa(@Param('id') id: string, @Body() pessoa) {
    return this.pessoaService.updatePessoa(Number(id), pessoa);
  }
 
  @Delete(':id')
  async deletePessoa(@Param('id') id: string) {
    return this.pessoaService.deletePessoa(Number(id));
  }
}
