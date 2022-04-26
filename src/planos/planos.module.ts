import { Module } from '@nestjs/common';
import { PlanosController } from './planos.controller';
import { PlanosService } from './planos.service';

@Module({
    imports: [TypeOrmModule.forFeature([Planos])],
    providers: [PlanosService],
    controllers: [PlanosController]})
export class PlanosModule {}
