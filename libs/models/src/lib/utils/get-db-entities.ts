import { Draw } from '@cr-lottery/models/draw/draw.entity';
import { LoteriaResult } from '@cr-lottery/models/loteria/loteria-result.entity';
import { ChancesResult } from '@cr-lottery/models/chances/chances-result.entity';
import { LottoResult } from '@cr-lottery/models/lotto/lotto-result.entity';
import { MonazosResult } from '@cr-lottery/models/monazos/monazos-result.entity';
import { TiemposResult } from '@cr-lottery/models/tiempos/tiempos-result.entity';

export const dbEntities = {
  Draw,
  LoteriaResult,
  ChancesResult,
  LottoResult,
  MonazosResult,
  TiemposResult,
};

export const getDBEntities = (
  config: { [key in keyof typeof dbEntities]?: boolean } = {}
) => {
  return Object.entries(dbEntities)
    .filter(([k]) => config[k] !== false)
    .map(([, v]) => v);
};
