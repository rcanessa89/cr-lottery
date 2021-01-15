import { Test, TestingModule } from '@nestjs/testing';
import { MonazosDrawsService } from './monazos-draws.service';

describe('MonazosDrawsService', () => {
  let service: MonazosDrawsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MonazosDrawsService],
    }).compile();

    service = module.get<MonazosDrawsService>(MonazosDrawsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
