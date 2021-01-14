import { Test, TestingModule } from '@nestjs/testing';
import { ChancesResultsResolver } from './chances-results.resolver';
import { ChancesResultsService } from './chances-results.service';

describe('ChancesResultsResolver', () => {
  let resolver: ChancesResultsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChancesResultsResolver, ChancesResultsService],
    }).compile();

    resolver = module.get<ChancesResultsResolver>(ChancesResultsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
