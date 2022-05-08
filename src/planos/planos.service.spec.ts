import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';
import { PlanosService } from './planos.service';
import Planos from './entitys/planos.entity';
import { PlanosRepositoryFake } from './planosRepositoryFake';
import { CreatePlanosDto } from './dto/create-plano.dto';

describe('PlanosService', () => {
  let service: PlanosService;
  let repo: Repository<Planos>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlanosService,
        {
          provide: getRepositoryToken(Planos),
          useClass: PlanosRepositoryFake,
        },
      ],
    }).compile();

    service = module.get(PlanosService);
    repo = module.get(getRepositoryToken(Planos));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('#getAllPlanos', () => {
    it('should get all pessoas', () => {
      const mockObservable: any = {
        toPromise: () => Promise.resolve('mockedObj'),
      };

      jest.spyOn(repo, 'find').mockResolvedValue(mockObservable);

      service.getAllPlanos().then((res) => {
        expect(res).toBe(mockObservable);
      });
    });
  });

  describe('#getPlanosById', () => {
    it('shoud return a plano', () => {
      const id = 1;

      const mockObservable: any = {
        toPromise: () => Promise.resolve('plano'),
      };

      jest.spyOn(repo, 'findOne').mockResolvedValue(mockObservable);

      service.getPlanoById(id).then((res) => {
        expect(res).toEqual(mockObservable);
      });
    });

    it('should throw an error', () => {
      const mockObservable: any = new Promise(() => {
        throw new Error('some-info');
      });

      jest.spyOn(repo, 'findOne').mockImplementation(() => mockObservable);

      expect(service.getPlanoById(3)).rejects.toThrow();
    });
  });
  describe('#updatePlanos', () => {
    it('should test update call', () => {
      const data: any = 'updatePlanos';

      const mockObservable: any = {
        toPromise: () => Promise.resolve('result'),
      };

      jest.spyOn(repo, 'update').mockResolvedValue(mockObservable);
      jest.spyOn(repo, 'findOne').mockResolvedValue(mockObservable);

      service.updatePlano(2, data).then((res) => {
        expect(res).toEqual(mockObservable);
      });
    });
    it('should throw an error', () => {
      const data: any = 'updatedPlanos';

      const mockObservable: any = new Promise(() => {
        throw new HttpException('Planos não encontrado', HttpStatus.NOT_FOUND);
      });

      jest.spyOn(repo, 'update').mockResolvedValue(mockObservable);

      expect(service.updatePlano(1, data)).rejects.toThrow();
    });
  });
  describe('#deletePlanos', () => {
    it('should teste delete call', async () => {
      const id = 2;
      const existingPlanos = { id: 2, nome: 'planos' };

      jest.spyOn(repo, 'findOne').mockResolvedValue(existingPlanos);
      jest.spyOn(repo, 'delete').mockResolvedValue(null);

      const result = await service.deletePlano(id);
      expect(result).toBe(undefined);
    });
  });
  describe('#createPlanos', () => {
    it('should create a plano', async () => {
      const data: CreatePlanosDto = { nome:"teste" };
      const mockObservable: any = {
        toPromise: () => Promise.resolve({}),
      };

      const plano: Planos = { id: 1, nome: 'planos' };
      jest.spyOn(repo, 'create').mockReturnValue(mockObservable);
      jest.spyOn(repo, 'save').mockResolvedValue(plano);

      const result = await service.createPlanos(data);

      expect(result).toEqual(mockObservable);
    });
  });
});
