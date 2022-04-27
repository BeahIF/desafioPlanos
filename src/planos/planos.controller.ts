import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePlanosDto } from './dto/create-plano.dto';
import { PlanosService } from './planos.service';

@Controller('planos')
export class PlanosController {
    constructor(private planosService:PlanosService){}

    
  @Get()
  getAllPlanos() {
    // return this.planoservice.getAllplanos();
  }

  
  @Get(':id')
  getPostById(@Param('id') id: string) {
    // return this.planoservice.getPessoaById(Number(id));
  }
 

  
  @Post()
  async createPessoa(@Body() post: CreatePlanosDto) {
      return this.planosService.createPlanos(post);
   
  }
 
  @Put(':id')
  async replacePessoa(@Param('id') id: string, @Body() post) {
    // return this.planoservice.replacePessoa(Number(id), post);
  }
 
  @Delete(':id')
  async deletePessoa(@Param('id') id: string) {
    // this.planoservice.deletePessoa(Number(id));
  }
}
