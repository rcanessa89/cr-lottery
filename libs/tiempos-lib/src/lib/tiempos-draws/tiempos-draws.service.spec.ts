import { Test, TestingModule } from '@nestjs/testing';
import { TiemposDrawsService } from './tiempos-draws.service';

describe('TiemposDrawsService', () => {
  let service: TiemposDrawsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiemposDrawsService],
    }).compile();

    service = module.get<TiemposDrawsService>(TiemposDrawsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
