import { Test, TestingModule } from '@nestjs/testing';
import { PessoaBeneficioService } from './pessoa-beneficio.service';

describe('PessoaBeneficioService', () => {
  let service: PessoaBeneficioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PessoaBeneficioService],
    }).compile();

    service = module.get<PessoaBeneficioService>(PessoaBeneficioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
