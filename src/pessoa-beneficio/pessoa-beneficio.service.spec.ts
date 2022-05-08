import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';
import { PessoaBeneficioService } from './pessoa-beneficio.service';
import PessoaBeneficio from './entitys/pessoa-beneficio.entity';
import { PessoaBeneficioRepositoryFake } from './pessoaBeneficioRepositoryFake';
import { CreatePessoaBeneficioDto } from './dto/create-pessoa-beneficio.dto';
import PlanoOferecido from '../plano-oferecido/entitys/plano-oferecido.entity';
import Pessoa from '../pessoa/entitys/pessoa.entity';

describe('PessoaBeneficioService', () => {
  let service: PessoaBeneficioService;
  let repoPessoaBeneficio: Repository<PessoaBeneficio>;
  let repoPlanoOferecido: Repository<PlanoOferecido>;
  let repoPessoa: Repository<Pessoa>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PessoaBeneficioService,
        {
          provide: getRepositoryToken(PessoaBeneficio),
          useClass: PessoaBeneficioRepositoryFake,
        },
        {
          provide: getRepositoryToken(Pessoa),
          useClass: PessoaBeneficioRepositoryFake,
        },
        {
          provide: getRepositoryToken(PlanoOferecido),
          useClass: PessoaBeneficioRepositoryFake,
        },
      ],
    }).compile();

    service = module.get(PessoaBeneficioService);
    repoPessoaBeneficio = module.get(getRepositoryToken(PessoaBeneficio));
    repoPlanoOferecido = module.get(getRepositoryToken(PlanoOferecido));
    repoPessoa = module.get(getRepositoryToken(Pessoa));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('#getAllPessoaBeneficio', () => {
    it('should get all pessoaBeneficios', () => {
      const mockObservable: any = {
        toPromise: () => Promise.resolve('mockedObj'),
      };

      jest.spyOn(repoPessoaBeneficio, 'find').mockResolvedValue(mockObservable);

      service.getAllPessoaBeneficio().then((res) => {
        expect(res).toBe(mockObservable);
      });
    });
  });

  // describe('#getPessoaBeneficioById', () => {
  //   it('shoud return a pessoaBeneficio', () => {
  //     const pessoaBeneficioId = 1;

  //     const mockObservable: any = {
  //       toPromise: () => Promise.resolve('pessoa'),
  //     };

  //     jest.spyOn(repo, 'findOne').mockResolvedValue(mockObservable);

  //     service.getPessoaBeneficioById(pessoaBeneficioId).then((res) => {
  //       expect(res).toEqual(mockObservable);
  //     });
  //   });

  //   it('should throw an error', () => {
  //     const mockObservable: any = new Promise(() => {
  //       throw new HttpException(
  //         'Beneficio não encontrado',
  //         HttpStatus.NOT_FOUND,
  //       );
  //     });

  //     jest.spyOn(repo, 'findOne').mockImplementation(() => mockObservable);

  //     expect(service.getPessoaBeneficioById(3)).rejects.toThrow();
  //   });
  // });
  // describe('#updatePessoaBeneficio', () => {
  //   it('should test update call', () => {
  //     const data: any = 'updatePessoaBeneficio';

  //     const mockObservable: any = {
  //       toPromise: () => Promise.resolve('result'),
  //     };

  //     jest.spyOn(repo, 'update').mockResolvedValue(mockObservable);
  //     jest.spyOn(repo, 'findOne').mockResolvedValue(mockObservable);

  //     service.updatePessoaBeneficio(2, data).then((res) => {
  //       expect(res).toEqual(mockObservable);
  //     });
  //   });
  //   it('should throw an error', () => {
  //     const data: any = 'updatedPessoaBeneficio';

  //     const mockObservable: any = new Promise(() => {
  //       throw new HttpException(
  //         'Beneficio não encontrado',
  //         HttpStatus.NOT_FOUND,
  //       );
  //     });

  //     jest.spyOn(repo, 'update').mockResolvedValue(mockObservable);

  //     expect(service.updatePessoaBeneficio(1, data)).rejects.toThrow();
  //   });
  // });
  describe('#deletePessoaBeneficio', () => {
    it('should teste delete call', async () => {
      const id = 2;
      const existingPessoaBeneficio = {
        id: 2,
        nome: 'string',
        id_pessoa: 0,
        id_cliente: 0,
        data: 'string',
        email: 'string',
        endereco: 'string',
        peso: 0,
        altura: 0,
        hora_meditacao: 0,
        createdDate: new Date(),
        updatedDate: new Date(),
      };

      jest
        .spyOn(repoPessoaBeneficio, 'findOne')
        .mockResolvedValue(existingPessoaBeneficio);
      jest.spyOn(repoPessoaBeneficio, 'delete').mockResolvedValue(null);

      const result = await service.deletePessoaBeneficio(id);
      expect(result).toBe(undefined);
    });
  });
  // describe('#createPessoaBeneficio', () => {
  //   it('should create a pessoBeneficio', async () => {
  //     const data: CreatePessoaBeneficioDto = {
  //       nome: 'string',
  //       // id_pessoa: 0,
  //       // id_cliente: 0,
  //       // data: 'string',
  //       email: 'string',
  //       // endereco: 'string',
  //       // peso: 0,
  //       // altura: 0,
  //       // hora_meditacao: 0,
  //     };
  //     const mockObservable: any = {
  //       toPromise: () =>
  //         Promise.resolve({
  //           createPessoaBeneficio: () => [jest.fn()],
  //         }),
  //     };

  //     const pessoaBeneficio: PessoaBeneficio = {
  //       id: 2,
  //       nome: 'string',
  //       id_pessoa: 0,
  //       id_cliente: 0,
  //       email: 'string',
  //       // endereco: 'string',
  //       // peso: 0,
  //       // altura: 0,
  //       // hora_meditacao: 0,
  //       createdDate: new Date(),
  //       updatedDate: new Date(),
  //     };
  //     const planos = jest
  //       .spyOn(repoPlanoOferecido, 'find')
  //       .mockReturnValue(mockObservable);
  //     const create = jest
  //       .spyOn(repoPessoaBeneficio, 'create')
  //       .mockReturnValue(mockObservable);

  //     const save = jest
  //       .spyOn(repoPessoaBeneficio, 'save')
  //       .mockResolvedValue(pessoaBeneficio);

  //     const result = await service.createPessoaBeneficio(data);
  //     console.log(result);

  //     jest.spyOn(repoPessoa, 'find').mockReturnValue(mockObservable);
  //     expect(result).toEqual(mockObservable);
  //   });
  // });
});
