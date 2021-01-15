import { Test, TestingModule } from '@nestjs/testing';
import { LottoPrizesService } from './lotto-prizes.service';

describe('LottoPrizesService', () => {
  let service: LottoPrizesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LottoPrizesService],
    }).compile();

    service = module.get<LottoPrizesService>(LottoPrizesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
