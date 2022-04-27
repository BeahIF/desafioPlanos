import { Test, TestingModule } from '@nestjs/testing';
import { PessoaBeneficioController } from './pessoa-beneficio.controller';

describe('PessoaBeneficioController', () => {
  let controller: PessoaBeneficioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PessoaBeneficioController],
    }).compile();

    controller = module.get<PessoaBeneficioController>(PessoaBeneficioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
