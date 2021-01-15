import { Test, TestingModule } from '@nestjs/testing';
import { LottoDrawsService } from './lotto-draws.service';

describe('LottoDrawsService', () => {
  let service: LottoDrawsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LottoDrawsService],
    }).compile();

    service = module.get<LottoDrawsService>(LottoDrawsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
