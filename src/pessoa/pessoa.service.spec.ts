import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import Pessoa from './entitys/pessoa.entity';
import { PessoaRepositoryFake } from './pessoaRepositoryFake';
import { CreatePessoaDto } from './dto/create-pessoa.dto';

describe('PessoaService', () => {
  let service: PessoaService;
  let repo: Repository<Pessoa>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PessoaService,
        {
          provide: getRepositoryToken(Pessoa),
          useClass: PessoaRepositoryFake,
        },
      ],
    }).compile();

    service = module.get(PessoaService);
    repo = module.get(getRepositoryToken(Pessoa));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('#getAllPessoa', () => {
    it('should get all pessoas', () => {
      const mockObservable: any = {
        toPromise: () => Promise.resolve('mockedObj'),
      };

      jest.spyOn(repo, 'find').mockResolvedValue(mockObservable);

      service.getAllPessoas().then((res) => {
        expect(res).toBe(mockObservable);
      });
    });
  });

  describe('#getPessoaById', () => {
    it('shoud return a pessoa', () => {
      const id = 1;

      const mockObservable: any = {
        toPromise: () => Promise.resolve('pessoa'),
      };

      jest.spyOn(repo, 'findOne').mockResolvedValue(mockObservable);

      service.getPessoaById(id).then((res) => {
        expect(res).toEqual(mockObservable);
      });
    });

    it('should throw an error', () => {
      const mockObservable: any = new Promise(() => {
        throw new Error('some-info');
      });

      jest.spyOn(repo, 'findOne').mockImplementation(() => mockObservable);

      expect(service.getPessoaById(3)).rejects.toThrow();
    });
  });
  describe('#updatePessoa', () => {
    it('should test update call', () => {
      const data: any = 'updatePessoa';

      const mockObservable: any = {
        toPromise: () => Promise.resolve('result'),
      };

      jest.spyOn(repo, 'update').mockResolvedValue(mockObservable);
      jest.spyOn(repo, 'findOne').mockResolvedValue(mockObservable);

      service.updatePessoa(2, data).then((res) => {
        expect(res).toEqual(mockObservable);
      });
    });
    it('should throw an error', () => {
      const data: any = 'updatedPessoa';

      const mockObservable: any = new Promise(() => {
        throw new HttpException('Pessoa não encontrado', HttpStatus.NOT_FOUND);
      });

      jest.spyOn(repo, 'update').mockResolvedValue(mockObservable);

      expect(service.updatePessoa(1, data)).rejects.toThrow();
    });
  });
  describe('#deletePessoa', () => {
    it('should teste delete call', async () => {
      const id = 2;
      const existingPessoa = { id: 2, cpf: 'CPFPessoa' };

      jest.spyOn(repo, 'findOne').mockResolvedValue(existingPessoa);
      jest.spyOn(repo, 'delete').mockResolvedValue(null);

      const result = await service.deletePessoa(id);
      expect(result).toBe(undefined);
    });
  });
  describe('#createPessoa', () => {
    it('should create a pessoa', async () => {
      const data: CreatePessoaDto = { cpf: 'cpfPessoa' };
      const mockObservable: any = {
        toPromise: () => Promise.resolve({}),
      };

      const pessoa: Pessoa = { id: 1, cpf: 'CPFPessoa' };
      jest.spyOn(repo, 'create').mockReturnValue(mockObservable);
      jest.spyOn(repo, 'save').mockResolvedValue(pessoa);

      const result = await service.createPessoa(data);

      expect(result).toEqual(mockObservable);
    });
  });
});
