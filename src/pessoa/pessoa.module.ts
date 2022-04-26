import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Pessoa from './entitys/pessoa.entity';
import { PessoaController } from './pessoa.controller';
import { PessoaService } from './pessoa.service';

@Module({
    imports: [TypeOrmModule.forFeature([Pessoa])],
    providers: [PessoaService],
  controllers: [PessoaController],
})

export class PessoaModule {}
