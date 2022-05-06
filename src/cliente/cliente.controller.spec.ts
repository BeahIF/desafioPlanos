import { Test, TestingModule } from '@nestjs/testing';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';

describe('ClienteController', () => {
  let controller: ClienteController;
  let service: ClienteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClienteController],
      providers: [
        {
          provide: ClienteService,
          useValue: {
            getAllClientes: jest.fn(),
            getClienteById: jest.fn(),
            createCliente: jest.fn(),
            updateCliente: jest.fn(),
            deleteCliente: jest.fn(),
          },
        },
      ],
    }).compile();
    controller = module.get(ClienteController);
    service = module.get(ClienteService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('#getAllClientes', () => {
    it('should call the getAllClientes method in the service', () => {
      const result: any = 'result';
      jest
        .spyOn(service, 'getAllClientes')
        .mockImplementation(() => Promise.resolve(result));

      controller.getAllClientes().then((res) => {
        expect(res).toBe(result);
      });
    });
  });
  describe('#getClienteById', () => {
    it('should call the getClienteById method in the service', () => {
      const result: any = 'result';
      const id: any = 1;
      jest
        .spyOn(service, 'getClienteById')
        .mockImplementation(() => Promise.resolve(result));

      controller.getClienteById(id).then((res) => {
        expect(res).toBe(result);
      });
    });
  });
  describe('#createCliente', () => {
    it('should call the createCliente method in the service', () => {
      const result: any = 'result';
      const body: CreateClienteDto = { nome: 'teste' };
      jest
        .spyOn(service, 'createCliente')
        .mockImplementation(() => Promise.resolve(result));

      controller.createCliente(body).then((res) => {
        expect(res).toBe(result);
      });
    });
  });
  describe('#updateCliente', () => {
    it('should call the updateCliente method in the service', () => {
      const result: any = 'result';
      const body: any = 'body';
      const id: any = 1;
      jest
        .spyOn(service, 'updateCliente')
        .mockImplementation(() => Promise.resolve(result));

      controller.updateCliente(id, body).then((res) => {
        expect(res).toBe(result);
      });
    });
  });
  describe('#deleteCliente', () => {
    it('should call the deleteCliente method in the service', () => {
      const result: any = 'result';

    //   const result: any = undefined;
    const id:any = 1
      jest
        .spyOn(service, 'deleteCliente')
        .mockImplementation(() => Promise.resolve(result));

      controller.deleteCliente(id).then((res) => {
        expect(res).toBe(result);
      });
    });
  });
});
