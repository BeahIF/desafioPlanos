import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePlanoOferecidoDto } from './dto/create-plano-oferecido.dto';
import { PlanoOferecidoService } from './plano-oferecido.service';

@Controller('plano-oferecido')
export class PlanoOferecidoController {
    constructor(private planoOferecidoService: PlanoOferecidoService){}

    
  @Get()
  getAllPlanoOferecido() {
    // return this.planoOferecidoervice.getAllplanoOferecido();
  }

  
  @Get(':id')
  getPostById(@Param('id') id: string) {
    // return this.planoOferecidoervice.getPessoaById(Number(id));
  }
 

  
  @Post()
  async createPessoa(@Body() post: CreatePlanoOferecidoDto) {
      return this.planoOferecidoService.createPlanoOferecido(post);
   
  }
 
  @Put(':id')
  async replacePessoa(@Param('id') id: string, @Body() post) {
    // return this.planoOferecidoervice.replacePessoa(Number(id), post);
  }
 
  @Delete(':id')
  async deletePessoa(@Param('id') id: string) {
    // this.planoOferecidoervice.deletePessoa(Number(id));
  }
}
