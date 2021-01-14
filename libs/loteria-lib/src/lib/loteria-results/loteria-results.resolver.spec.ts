import { Test, TestingModule } from '@nestjs/testing';
import { LoteriaResultsResolver } from './loteria-results.resolver';
import { LoteriaResultsService } from './loteria-results.service';

describe('LoteriaResultsResolver', () => {
  let resolver: LoteriaResultsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoteriaResultsResolver, LoteriaResultsService],
    }).compile();

    resolver = module.get<LoteriaResultsResolver>(LoteriaResultsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
