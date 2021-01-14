import { Test, TestingModule } from '@nestjs/testing';
import { LoteriaResultsService } from './loteria-results.service';

describe('LoteriaResultsService', () => {
  let service: LoteriaResultsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoteriaResultsService],
    }).compile();

    service = module.get<LoteriaResultsService>(LoteriaResultsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
