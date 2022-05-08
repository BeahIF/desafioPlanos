import { Test, TestingModule } from '@nestjs/testing';
import { CreatePlanosDto } from './dto/create-plano.dto';
import { PlanosController } from './planos.controller';
import { PlanosService } from './planos.service';

describe('PlanoController', () => {
  let controller: PlanosController;
  let service: PlanosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanosController],
      providers: [
        {
          provide: PlanosService,
          useValue: {
            getAllPlanos: jest.fn(),
            getPlanoById: jest.fn(),
            createPlanos: jest.fn(),
            updatePlano: jest.fn(),
            deletePlano: jest.fn(),
          },
        },
      ],
    }).compile();
    controller = module.get(PlanosController);
    service = module.get(PlanosService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('#getAllPlanoss', () => {
    it('should call the getAllPlanoss method in the service', () => {
      const result: any = 'result';
      jest
        .spyOn(service, 'getAllPlanos')
        .mockImplementation(() => Promise.resolve(result));

      controller.getAllPlanos().then((res) => {
        expect(res).toBe(result);
      });
    });
  });
  describe('#getPlanosById', () => {
    it('should call the getPlanosById method in the service', () => {
      const result: any = 'result';
      const id: any = 1;
      jest
        .spyOn(service, 'getPlanoById')
        .mockImplementation(() => Promise.resolve(result));

      controller.getPlanosById(id).then((res) => {
        expect(res).toBe(result);
      });
    });
  });
  describe('#createPlanos', () => {
    it('should call the createPlanos method in the service', () => {
      const result: any = 'result';
      const body: CreatePlanosDto = { nome: 'nometeste' };
      jest
        .spyOn(service, 'createPlanos')
        .mockImplementation(() => Promise.resolve(result));

      controller.createPlanos(body).then((res) => {
        expect(res).toBe(result);
      });
    });
  });
  describe('#updatePlanos', () => {
    it('should call the updatePlanos method in the service', () => {
      const result: any = 'result';
      const body: any = 'body';
      const id: any = 1;
      jest
        .spyOn(service, 'updatePlano')
        .mockImplementation(() => Promise.resolve(result));

      controller.updatePlanos(id, body).then((res) => {
        expect(res).toBe(result);
      });
    });
  });
  describe('#deletePlanos', () => {
    it('should call the deletePlanos method in the service', () => {
      const result: any = 'result';

      const id: any = 1;
      jest
        .spyOn(service, 'deletePlano')
        .mockImplementation(() => Promise.resolve(result));

      controller.deletePlanos(id).then((res) => {
        expect(res).toBe(result);
      });
    });
  });
});
