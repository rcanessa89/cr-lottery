import { Test, TestingModule } from '@nestjs/testing';
import { ChancesResultsService } from './chances-results.service';

describe('ChancesResultsService', () => {
  let service: ChancesResultsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChancesResultsService],
    }).compile();

    service = module.get<ChancesResultsService>(ChancesResultsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
