import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePessoaBeneficioDto } from './dto/create-pessoa-beneficio.dto';
import { PessoaBeneficioService } from './pessoa-beneficio.service';

@Controller('pessoa-beneficio')
export class PessoaBeneficioController {
  constructor(private pessoaBeneficioService: PessoaBeneficioService) {}

    
    
  @Get()
  getAllPessoaBeneficio() {
    return this.pessoaBeneficioService.getAllPessoaBeneficio();
  }

  
  @Get(':id')
  getPessoaBeneficioById(@Param('id') id: string) {
    return this.pessoaBeneficioService.getPessoaBeneficioById(Number(id));
  }
 

  
  @Post()
  async createPessoaBeneficio(@Body() post: CreatePessoaBeneficioDto) {
      return this.pessoaBeneficioService.createPessoaBeneficio(post);
   
  }
 
  @Put(':id')
  async updatePessoaBeneficio(@Param('id') id: string, @Body() pessoaBeneficio) {
    return this.pessoaBeneficioService.updatePessoaBeneficio(Number(id), pessoaBeneficio);
  }
 
  @Delete(':id')
  async deletePessoaBeneficio(@Param('id') id: string) {
    this.pessoaBeneficioService.deletePessoaBeneficio(Number(id));
  }
}
