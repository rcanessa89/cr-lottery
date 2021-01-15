import { Test, TestingModule } from '@nestjs/testing';
import { MonazosDrawsResolver } from './monazos-draws.resolver';
import { MonazosDrawsService } from './monazos-draws.service';

describe('MonazosDrawsResolver', () => {
  let resolver: MonazosDrawsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MonazosDrawsResolver, MonazosDrawsService],
    }).compile();

    resolver = module.get<MonazosDrawsResolver>(MonazosDrawsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
