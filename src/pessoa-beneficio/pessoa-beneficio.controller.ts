import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePessoaBeneficioDto } from './dto/create-pessoa-beneficio.dto';
import { PessoaBeneficioService } from './pessoa-beneficio.service';

@Controller('pessoa-beneficio')
export class PessoaBeneficioController {
    constructor(private pessoaBeneficioService:PessoaBeneficioService){}

    
    
  @Get()
  getAllPessoaBeneficio() {
    // return this.PessoaBeneficioervice.getAllPessoaBeneficio();
  }

  
  @Get(':id')
  getPostById(@Param('id') id: string) {
    // return this.PessoaBeneficioervice.getPessoaById(Number(id));
  }
 

  
  @Post()
  async createPessoaBeneficio(@Body() post: CreatePessoaBeneficioDto) {
      return this.pessoaBeneficioService.createPessoaBeneficio(post);
   
  }
 
  @Put(':id')
  async replacePessoa(@Param('id') id: string, @Body() post) {
    // return this.PessoaBeneficioervice.replacePessoa(Number(id), post);
  }
 
  @Delete(':id')
  async deletePessoa(@Param('id') id: string) {
    // this.PessoaBeneficioervice.deletePessoa(Number(id));
  }
}
