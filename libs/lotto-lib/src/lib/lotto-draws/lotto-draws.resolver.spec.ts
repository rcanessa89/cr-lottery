import { Test, TestingModule } from '@nestjs/testing';
import { LottoDrawsResolver } from './lotto-draws.resolver';
import { LottoDrawsService } from './lotto-draws.service';

describe('LottoDrawsResolver', () => {
  let resolver: LottoDrawsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LottoDrawsResolver, LottoDrawsService],
    }).compile();

    resolver = module.get<LottoDrawsResolver>(LottoDrawsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
