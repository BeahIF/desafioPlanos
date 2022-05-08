import { Test, TestingModule } from '@nestjs/testing';
import { CreatePessoaBeneficioDto } from './dto/create-pessoa-beneficio.dto';
import { PessoaBeneficioController } from './pessoa-beneficio.controller';
import { PessoaBeneficioService } from './pessoa-beneficio.service';

describe('PessoaBeneficioController', () => {
  let controller: PessoaBeneficioController;
  let service: PessoaBeneficioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PessoaBeneficioController],
      providers: [
        {
          provide: PessoaBeneficioService,
          useValue: {
            getAllPessoaBeneficio: jest.fn(),
            getPessoaBeneficioById: jest.fn(),
            createPessoaBeneficio: jest.fn(),
            updatePessoaBeneficio: jest.fn(),
            deletePessoaBeneficio: jest.fn(),
          },
        },
      ],
    }).compile();
    controller = module.get(PessoaBeneficioController);
    service = module.get(PessoaBeneficioService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('#getAllPessoaBeneficios', () => {
    it('should call the getAllPessoaBeneficios method in the service', () => {
      const result: any = 'result';
      jest
        .spyOn(service, 'getAllPessoaBeneficio')
        .mockImplementation(() => Promise.resolve(result));

      controller.getAllPessoaBeneficio().then((res) => {
        expect(res).toBe(result);
      });
    });
  });
  describe('#getPessoaBeneficioById', () => {
    it('should call the getPessoaBeneficioById method in the service', () => {
      const result: any = 'result';
      const id: any = 1;
      jest
        .spyOn(service, 'getPessoaBeneficioById')
        .mockImplementation(() => Promise.resolve(result));

      controller.getPessoaBeneficioById(id).then((res) => {
        expect(res).toBe(result);
      });
    });
  });
  describe('#createPessoaBeneficio', () => {
    it('should call the createPessoaBeneficio method in the service', () => {
      const result: any = 'result';
      const body: CreatePessoaBeneficioDto = {
        nome: 'string',
        id_pessoa: 0,
        id_cliente: 0,
        data: 'string',
        email: 'string',
        endereco: 'string',
        peso: 0,
        altura: 0,
        hora_meditacao: 0,
      };
      jest
        .spyOn(service, 'createPessoaBeneficio')
        .mockImplementation(() => Promise.resolve(result));

      controller.createPessoaBeneficio(body).then((res) => {
        expect(res).toBe(result);
      });
    });
  });
  describe('#updatePessoaBeneficio', () => {
    it('should call the updatePessoaBeneficio method in the service', () => {
      const result: any = 'result';
      const body: any = 'body';
      const id: any = 1;
      jest
        .spyOn(service, 'updatePessoaBeneficio')
        .mockImplementation(() => Promise.resolve(result));

      controller.updatePessoaBeneficio(id, body).then((res) => {
        expect(res).toBe(result);
      });
    });
  });
  describe('#deletePessoaBeneficio', () => {
    it('should call the deletePessoaBeneficio method in the service', () => {
      const result: any = 'result';

      const id: any = 1;
      jest
        .spyOn(service, 'deletePessoaBeneficio')
        .mockImplementation(() => Promise.resolve(result));

      controller.deletePessoaBeneficio(id).then((res) => {
        expect(res).toBe(result);
      });
    });
  });
});
