import { Test, TestingModule } from '@nestjs/testing';
import { LottoResultsService } from './lotto-results.service';

describe('LottoResultsService', () => {
  let service: LottoResultsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LottoResultsService],
    }).compile();

    service = module.get<LottoResultsService>(LottoResultsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
