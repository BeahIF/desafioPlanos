import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePlanoOferecidoDto } from './dto/create-plano-oferecido.dto';
import { PlanoOferecidoService } from './plano-oferecido.service';

@Controller('plano-oferecido')
export class PlanoOferecidoController {
    constructor(private planoOferecidoService: PlanoOferecidoService){}

    
  @Get()
  async getAllPlanoOferecido() {

    return this.planoOferecidoService.getAllPlanoOferecidos();
  }

  
  @Get(':id')
  getPlanoOferecidoById(@Param('id') id: string) {
    return this.planoOferecidoService.getPlanoOferecidoById(Number(id));
  }
 

  
  @Post()
  async createPlanoOferecido(@Body() post: CreatePlanoOferecidoDto) {
      return this.planoOferecidoService.createPlanoOferecido(post);
   
  }
 
  @Put(':id')
  async updatePlanoOferecido(@Param('id') id: string, @Body() post) {
    return this.planoOferecidoService.updatePlanoOferecido(Number(id), post);
  }
 
  @Delete(':id')
  async deletePlanoOferecido(@Param('id') id: string) {
    return this.planoOferecidoService.deletePlanoOferecido(Number(id));
  }
}
