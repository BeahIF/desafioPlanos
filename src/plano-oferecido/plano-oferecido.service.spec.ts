
import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';
import { PlanoOferecidoService } from './plano-oferecido.service';
import PlanoOferecido from './entitys/plano-oferecido.entity';
import { PlanoOferecidoRepositoryFake } from './planoOferecidoRepositoryFake';
import { CreatePlanoOferecidoDto } from './dto/create-plano-oferecido.dto';

describe('PlanoOferecidoService', () => {
  let service: PlanoOferecidoService;
  let repo: Repository<PlanoOferecido>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlanoOferecidoService,
        {
          provide: getRepositoryToken(PlanoOferecido),
          useClass: PlanoOferecidoRepositoryFake,
        },
      ],
    }).compile();

    service = module.get(PlanoOferecidoService);
    repo = module.get(getRepositoryToken(PlanoOferecido));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('#getAllPlanoOferecidos', () => {
    it('should get all planos oferecidos', () => {
      const mockObservable: any = {
        toPromise: () => Promise.resolve('mockedObj'),
      };

      jest.spyOn(repo, 'find').mockResolvedValue(mockObservable);

      service.getAllPlanoOferecidos().then((res) => {
        expect(res).toBe(mockObservable);
      });
    });
  });

  describe('#getPlanoOferecidoById', () => {
    it('shoud return a pessoa', () => {
      const id = 1;

      const mockObservable: any = {
        toPromise: () => Promise.resolve('pessoa'),
      };

      jest.spyOn(repo, 'findOne').mockResolvedValue(mockObservable);

      service.getPlanoOferecidoById(id).then((res) => {
        expect(res).toEqual(mockObservable);
      });
    });

    it('should throw an error', () => {
      const mockObservable: any = new Promise(() => {
        throw new Error('some-info');
      });

      jest.spyOn(repo, 'findOne').mockImplementation(() => mockObservable);

      expect(service.getPlanoOferecidoById(3)).rejects.toThrow();
    });
  });
  describe('#updatePlanoOferecido', () => {
    it('should test update call', () => {
      const data: any = 'updatePlanoOferecido';

      const mockObservable: any = {
        toPromise: () => Promise.resolve('result'),
      };

      jest.spyOn(repo, 'update').mockResolvedValue(mockObservable);
      jest.spyOn(repo, 'findOne').mockResolvedValue(mockObservable);

      service.updatePlanoOferecido(2, data).then((res) => {
        expect(res).toEqual(mockObservable);
      });
    });
    it('should throw an error', () => {
      const data: any = 'updatedPlanoOferecido';

      const mockObservable: any = new Promise(() => {
        throw new HttpException('Plano Oferecido não encontrado', HttpStatus.NOT_FOUND);
      });

      jest.spyOn(repo, 'update').mockResolvedValue(mockObservable);

      expect(service.updatePlanoOferecido(1, data)).rejects.toThrow();
    });
  });
  describe('#deletePlanoOferecido', () => {
    it('should teste delete call', async () => {
      const id = 2;
      const existingPlanoOferecido = { id: 2, id_cliente:0, id_plano:0  };

      jest.spyOn(repo, 'findOne').mockResolvedValue(existingPlanoOferecido);
      jest.spyOn(repo, 'delete').mockResolvedValue(null);

      const result = await service.deletePlanoOferecido(id);
      expect(result).toBe(undefined);
    });
  });
  describe('#createPlanoOferecido', () => {
    it('should create a pessoa', async () => {
      const data: CreatePlanoOferecidoDto = { id_cliente:0, id_plano:0 };
      const mockObservable: any = {
        toPromise: () => Promise.resolve({}),
      };

      const pessoa: PlanoOferecido = { id: 1, id_cliente:0, id_plano:0  };
      jest.spyOn(repo, 'create').mockReturnValue(mockObservable);
      jest.spyOn(repo, 'save').mockResolvedValue(pessoa);

      const result = await service.createPlanoOferecido(data);

      expect(result).toEqual(mockObservable);
    });
  });
});
