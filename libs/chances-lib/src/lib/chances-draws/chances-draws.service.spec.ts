import { Test, TestingModule } from '@nestjs/testing';
import { ChancesDrawsService } from './chances-draws.service';

describe('ChancesDrawsService', () => {
  let service: ChancesDrawsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChancesDrawsService],
    }).compile();

    service = module.get<ChancesDrawsService>(ChancesDrawsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
