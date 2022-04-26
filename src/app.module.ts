import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PlanosModule } from './planos/planos.module';
import { DatabaseModule } from 'database.module';
import { ConfigModule } from '@nestjs/config';
import { PessoaService } from './pessoa/pessoa.service';
import { PessoaController } from './pessoa/pessoa.controller';
import { ClienteController } from './cliente/cliente.controller';
import { ClienteService } from './cliente/cliente.service';
import { PessoaModule } from './pessoa/pessoa.module';
import { ClienteModule } from './cliente/cliente.module';
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
    PlanosModule,
    PessoaModule,
  ],
  controllers: [AppController, PessoaController, ClienteController],
  providers: [AppService, PessoaService, ClienteService],
})
export class AppModule {}
