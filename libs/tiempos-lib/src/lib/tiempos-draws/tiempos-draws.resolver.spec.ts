import { Test, TestingModule } from '@nestjs/testing';
import { TiemposDrawsResolver } from './tiempos-draws.resolver';
import { TiemposDrawsService } from './tiempos-draws.service';

describe('TiemposDrawsResolver', () => {
  let resolver: TiemposDrawsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiemposDrawsResolver, TiemposDrawsService],
    }).compile();

    resolver = module.get<TiemposDrawsResolver>(TiemposDrawsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
