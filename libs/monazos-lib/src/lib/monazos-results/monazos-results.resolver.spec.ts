import { Test, TestingModule } from '@nestjs/testing';
import { MonazosResultsResolver } from './monazos-results.resolver';
import { MonazosResultsService } from './monazos-results.service';

describe('MonazosResultsResolver', () => {
  let resolver: MonazosResultsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MonazosResultsResolver, MonazosResultsService],
    }).compile();

    resolver = module.get<MonazosResultsResolver>(MonazosResultsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
