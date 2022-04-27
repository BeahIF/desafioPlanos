import { Test, TestingModule } from '@nestjs/testing';
import { PlanoOferecidoController } from './plano-oferecido.controller';

describe('PlanoOferecidoController', () => {
  let controller: PlanoOferecidoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanoOferecidoController],
    }).compile();

    controller = module.get<PlanoOferecidoController>(PlanoOferecidoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
