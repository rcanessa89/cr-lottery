import { Test, TestingModule } from '@nestjs/testing';
import { ChancesDrawsResolver } from './chances-draws.resolver';
import { ChancesDrawsService } from './chances-draws.service';

describe('ChancesDrawsResolver', () => {
  let resolver: ChancesDrawsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChancesDrawsResolver, ChancesDrawsService],
    }).compile();

    resolver = module.get<ChancesDrawsResolver>(ChancesDrawsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
