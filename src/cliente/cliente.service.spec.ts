import { ClienteService } from './cliente.service';
import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import Cliente from './entitys/cliente.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ClienteRepositoryFake } from './clienteRepositoryFake';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { HttpException, HttpStatus } from '@nestjs/common';

describe('ClientesService', () => {
  let service: ClienteService;
  let repo: Repository<Cliente>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClienteService,
        {
          provide: getRepositoryToken(Cliente),
          useClass: ClienteRepositoryFake,
        },
      ],
    }).compile();

    service = module.get(ClienteService);
    repo = module.get(getRepositoryToken(Cliente));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('#getAllClientes', () => {
    it('should get all clientes', () => {
      const mockObservable: any = {
        toPromise: () => Promise.resolve('mockedObj'),
      };

      jest.spyOn(repo, 'find').mockResolvedValue(mockObservable);

      service.getAllClientes().then((res) => {
        expect(res).toBe(mockObservable);
      });
    });
  });

  describe('#getClienteById', () => {
    it('shoud return a cliente', () => {
      const clienteId = 1;

      const mockObservable: any = {
        toPromise: () => Promise.resolve('cliente'),
      };

      jest.spyOn(repo, 'findOne').mockResolvedValue(mockObservable);

      service.getClienteById(clienteId).then((res) => {
        expect(res).toEqual(mockObservable);
      });
    });

    it('should throw an error', () => {
      const mockObservable: any = new Promise(() => {
        throw new Error('some-info');
      });

      jest.spyOn(repo, 'findOne').mockImplementation(() => mockObservable);

      expect(service.getClienteById(3)).rejects.toThrow();
    });
  });
  describe('#updateCliente', () => {
    it('should test update call', () => {
      const data: any = 'updateCliente';

      const mockObservable: any = {
        toPromise: () => Promise.resolve('result'),
      };

      jest.spyOn(repo, 'update').mockResolvedValue(mockObservable);
      jest.spyOn(repo, 'findOne').mockResolvedValue(mockObservable);

      service.updateCliente(2, data).then((res) => {
        expect(res).toEqual(mockObservable);
      });
    });
    it('should throw an error', () => {
      const data: any = 'updatedCliente';

      const mockObservable: any = new Promise(() => {
        throw new HttpException('Cliente não encontrado', HttpStatus.NOT_FOUND);
      });

      jest.spyOn(repo, 'update').mockResolvedValue(mockObservable);

      expect(service.updateCliente(1, data)).rejects.toThrow();
    });
  });
  describe('#deleteCliente', () => {
    it('should teste delete call', async () => {
      const id = 2;
      const existingCliente = { id: 2, nome: 'Cliente' };

      jest.spyOn(repo, 'findOne').mockResolvedValue(existingCliente);
      jest.spyOn(repo, 'delete').mockResolvedValue(null);

      const result = await service.deleteCliente(id);
      expect(result).toBe(undefined);
    });
  });
  describe('#createCliente', () => {
    it('should create a cliente', async () => {
      const data: CreateClienteDto = { nome: 'Cliente' };
      const mockObservable: any = {
        toPromise: () => Promise.resolve({}),
      };

      const cliente: Cliente = { id: 1, nome: 'Cliente' };
      jest.spyOn(repo, 'create').mockReturnValue(mockObservable);
      jest.spyOn(repo, 'save').mockResolvedValue(cliente);

      const result = await service.createCliente(data);

      expect(result).toEqual(mockObservable);
    });
  });
});
