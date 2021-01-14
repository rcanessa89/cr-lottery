import { Test, TestingModule } from '@nestjs/testing';
import { LoteriaDrawsResolver } from './loteria-draws.resolver';
import { LoteriaDrawsService } from './loteria-draws.service';

describe('LoteriaDrawsResolver', () => {
  let resolver: LoteriaDrawsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoteriaDrawsResolver, LoteriaDrawsService],
    }).compile();

    resolver = module.get<LoteriaDrawsResolver>(LoteriaDrawsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
