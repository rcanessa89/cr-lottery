import { Resolver } from '@nestjs/graphql';
import { LoteriaResultsService } from './loteria-results.service';

@Resolver()
export class LoteriaResultsResolver {
  constructor(private readonly loteriaResultsService: LoteriaResultsService) {}
}
