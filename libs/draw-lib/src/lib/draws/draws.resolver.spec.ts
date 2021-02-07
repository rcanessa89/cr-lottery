import { Test, TestingModule } from '@nestjs/testing';
import { DrawsResolver } from './draws.resolver';
import { DrawsService } from './draws.service';

describe('DrawsResolver', () => {
  let resolver: DrawsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DrawsResolver, DrawsService],
    }).compile();

    resolver = module.get<DrawsResolver>(DrawsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
