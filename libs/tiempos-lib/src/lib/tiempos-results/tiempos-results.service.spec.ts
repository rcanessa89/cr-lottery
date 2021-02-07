import { Test, TestingModule } from '@nestjs/testing';
import { TiemposResultsService } from './tiempos-results.service';

describe('TiemposResultsService', () => {
  let service: TiemposResultsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiemposResultsService],
    }).compile();

    service = module.get<TiemposResultsService>(TiemposResultsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
