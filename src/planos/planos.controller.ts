import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePlanosDto } from './dto/create-plano.dto';
import { PlanosService } from './planos.service';

@Controller('planos')
export class PlanosController {
    constructor(private planosService:PlanosService){}

    
  @Get()
  getAllPlanos() {
    return this.planosService.getAllPlanos();
  }

  
  @Get(':id')
  getPlanosById(@Param('id') id: string) {
    return this.planosService.getPlanoById(Number(id));
  }
 

  
  @Post()
  async createPlanos(@Body() post: CreatePlanosDto) {
      return this.planosService.createPlanos(post);
   
  }
 
  @Put(':id')
  async updatePlanos(@Param('id') id: string, @Body() post) {
    return this.planosService.updatePlano(Number(id), post);
  }
 
  @Delete(':id')
  async deletePlanos(@Param('id') id: string) {
    this.planosService.deletePlano(Number(id));
  }
}
