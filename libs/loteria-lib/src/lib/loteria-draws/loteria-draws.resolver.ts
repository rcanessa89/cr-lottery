import { Resolver } from '@nestjs/graphql';
import { LoteriaDrawsService } from './loteria-draws.service';

@Resolver()
export class LoteriaDrawsResolver {
  constructor(private readonly loteriaDrawsService: LoteriaDrawsService) {}
}
