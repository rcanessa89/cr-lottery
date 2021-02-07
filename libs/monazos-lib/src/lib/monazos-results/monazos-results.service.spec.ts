import { Test, TestingModule } from '@nestjs/testing';
import { MonazosResultsService } from './monazos-results.service';

describe('MonazosResultsService', () => {
  let service: MonazosResultsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MonazosResultsService],
    }).compile();

    service = module.get<MonazosResultsService>(MonazosResultsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
