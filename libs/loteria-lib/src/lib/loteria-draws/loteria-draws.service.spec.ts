import { Test, TestingModule } from '@nestjs/testing';
import { LoteriaDrawsService } from './loteria-draws.service';

describe('LoteriaDrawsService', () => {
  let service: LoteriaDrawsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoteriaDrawsService],
    }).compile();

    service = module.get<LoteriaDrawsService>(LoteriaDrawsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
