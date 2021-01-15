import { Test, TestingModule } from '@nestjs/testing';
import { LottoPrizesResolver } from './lotto-prizes.resolver';
import { LottoPrizesService } from './lotto-prizes.service';

describe('LottoPrizesResolver', () => {
  let resolver: LottoPrizesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LottoPrizesResolver, LottoPrizesService],
    }).compile();

    resolver = module.get<LottoPrizesResolver>(LottoPrizesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
