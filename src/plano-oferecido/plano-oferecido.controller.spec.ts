import { Test, TestingModule } from '@nestjs/testing';
import { CreatePlanoOferecidoDto } from './dto/create-plano-oferecido.dto';
import { PlanoOferecidoController } from './plano-oferecido.controller';
import { PlanoOferecidoService } from './plano-oferecido.service';

describe('PlanoOferecidoController', () => {
  let controller: PlanoOferecidoController;
  let service: PlanoOferecidoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanoOferecidoController],
      providers: [
        {
          provide: PlanoOferecidoService,
          useValue: {
            getAllPlanoOferecidos: jest.fn(),
            getPlanoOferecidoById: jest.fn(),
            createPlanoOferecido: jest.fn(),
            updatePlanoOferecido: jest.fn(),
            deletePlanoOferecido: jest.fn(),
          },
        },
      ],
    }).compile();
    controller = module.get(PlanoOferecidoController);
    service = module.get(PlanoOferecidoService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('#getAllPlanoOferecidos', () => {
    it('should call the getAllPlanoOferecidos method in the service', () => {
      const result: any = 'result';
      jest
        .spyOn(service, 'getAllPlanoOferecidos')
        .mockImplementation(() => Promise.resolve(result));

      controller.getAllPlanoOferecido().then((res) => {
        expect(res).toBe(result);
      });
    });
  });
  describe('#getPlanoOferecidoById', () => {
    it('should call the getPlanoOferecidoById method in the service', () => {
      const result: any = 'result';
      const id: any = 1;
      jest
        .spyOn(service, 'getPlanoOferecidoById')
        .mockImplementation(() => Promise.resolve(result));

      controller.getPlanoOferecidoById(id).then((res) => {
        expect(res).toBe(result);
      });
    });
  });
  describe('#createPlanoOferecido', () => {
    it('should call the createPlanoOferecido method in the service', () => {
      const result: any = 'result';
      const body: CreatePlanoOferecidoDto = { id_cliente: 0, id_plano: 0 };
      jest
        .spyOn(service, 'createPlanoOferecido')
        .mockImplementation(() => Promise.resolve(result));

      controller.createPlanoOferecido(body).then((res) => {
        expect(res).toBe(result);
      });
    });
  });
  describe('#updatePlanoOferecido', () => {
    it('should call the updatePlanoOferecido method in the service', () => {
      const result: any = 'result';
      const body: any = 'body';
      const id: any = 1;
      jest
        .spyOn(service, 'updatePlanoOferecido')
        .mockImplementation(() => Promise.resolve(result));

      controller.updatePlanoOferecido(id, body).then((res) => {
        expect(res).toBe(result);
      });
    });
  });
  describe('#deletePlanoOferecido', () => {
    it('should call the deletePlanoOferecido method in the service', () => {
      const result: any = 'result';

      const id: any = 1;
      jest
        .spyOn(service, 'deletePlanoOferecido')
        .mockImplementation(() => Promise.resolve(result));

      controller.deletePlanoOferecido(id).then((res) => {
        expect(res).toBe(result);
      });
    });
  });
});
