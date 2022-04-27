import { Test, TestingModule } from '@nestjs/testing';
import { PlanoOferecidoService } from './plano-oferecido.service';

describe('PlanoOferecidoService', () => {
  let service: PlanoOferecidoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanoOferecidoService],
    }).compile();

    service = module.get<PlanoOferecidoService>(PlanoOferecidoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
