import { Test, TestingModule } from '@nestjs/testing';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { PessoaController } from './pessoa.controller';
import { PessoaService } from './pessoa.service';


describe('PessoaController', () => {
  let controller: PessoaController;
  let service: PessoaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PessoaController],
      providers: [
        {
          provide: PessoaService,
          useValue: {
            getAllPessoas: jest.fn(),
            getPessoaById: jest.fn(),
            createPessoa: jest.fn(),
            updatePessoa: jest.fn(),
            deletePessoa: jest.fn(),
          },
        },
      ],
    }).compile();
    controller = module.get(PessoaController);
    service = module.get(PessoaService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('#getAllPessoas', () => {
    it('should call the getAllPessoas method in the service', () => {
      const result: any = 'result';
      jest
        .spyOn(service, 'getAllPessoas')
        .mockImplementation(() => Promise.resolve(result));

      controller.getAllPessoas().then((res) => {
        expect(res).toBe(result);
      });
    });
  });
  describe('#getPessoaById', () => {
    it('should call the getPessoaById method in the service', () => {
      const result: any = 'result';
      const id: any = 1;
      jest
        .spyOn(service, 'getPessoaById')
        .mockImplementation(() => Promise.resolve(result));

      controller.getPessoaById(id).then((res) => {
        expect(res).toBe(result);
      });
    });
  });
  describe('#createPessoa', () => {
    it('should call the createPessoa method in the service', () => {
      const result: any = 'result';
      const body: CreatePessoaDto = { cpf: 'cpfteste' };
      jest
        .spyOn(service, 'createPessoa')
        .mockImplementation(() => Promise.resolve(result));

      controller.createPessoa(body).then((res) => {
        expect(res).toBe(result);
      });
    });
  });
  describe('#updatePessoa', () => {
    it('should call the updatePessoa method in the service', () => {
      const result: any = 'result';
      const body: any = 'body';
      const id: any = 1;
      jest
        .spyOn(service, 'updatePessoa')
        .mockImplementation(() => Promise.resolve(result));

      controller.updatePessoa(id, body).then((res) => {
        expect(res).toBe(result);
      });
    });
  });
  describe('#deletePessoa', () => {
    it('should call the deletePessoa method in the service', () => {
      const result: any = 'result';

    const id:any = 1
      jest
        .spyOn(service, 'deletePessoa')
        .mockImplementation(() => Promise.resolve(result));

      controller.deletePessoa(id).then((res) => {
        expect(res).toBe(result);
      });
    });
  });
});
