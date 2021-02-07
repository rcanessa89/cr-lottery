import { Test, TestingModule } from '@nestjs/testing';
import { LottoResultsResolver } from './lotto-results.resolver';
import { LottoResultsService } from './lotto-results.service';

describe('LottoResultsResolver', () => {
  let resolver: LottoResultsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LottoResultsResolver, LottoResultsService],
    }).compile();

    resolver = module.get<LottoResultsResolver>(LottoResultsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
