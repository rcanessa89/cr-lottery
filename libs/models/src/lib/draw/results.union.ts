import { createUnionType, ObjectType, OmitType } from '@nestjs/graphql';

import { mapTypes } from '@cr-lottery/utils/map-types';
import { LoteriaResult } from '../loteria/loteria-result.entity';
import { ChancesResult } from '../chances/chances-result.entity';
import { LottoResult } from '../lotto/lotto-result.entity';
import { MonazosResult } from '../monazos/monazos-result.entity';
import { TiemposResult } from '../tiempos/tiempos-result.entity';

const resultTypes = {
  LoteriaResult,
  ChancesResult,
  LottoResult,
  MonazosResult,
  TiemposResult,
};

const typesMap = mapTypes<typeof resultTypes>(
  (c) => ({
    Decorator: ObjectType,
    metadata: [c.name.replace('Result', '')],
  }),
  // eslint-disable-next-line
  (c) => OmitType(c, ['draw'] as any),
  resultTypes
);

export const ResultsUnion = createUnionType({
  name: 'Results',
  types: () => Object.values(typesMap),
  resolveType: (r) => r.constructor.name || null,
});
