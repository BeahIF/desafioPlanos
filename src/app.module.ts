import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlanosModule } from './planos/planos.module';
import { DatabaseModule } from 'database.module';
import { ConfigModule } from '@nestjs/config';
import { PessoaModule } from './pessoa/pessoa.module';
import { ClienteModule } from './cliente/cliente.module';
import { PessoaBeneficioModule } from './pessoa-beneficio/pessoa-beneficio.module';
import { PlanoOferecidoModule } from './plano-oferecido/plano-oferecido.module';
import * as Joi from '@hapi/joi';

@Module({
  imports: [
    PlanosModule,
    PessoaModule,
    ClienteModule,
    DatabaseModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
      }),
    }),
    PessoaBeneficioModule,
    PlanoOferecidoModule,
   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
