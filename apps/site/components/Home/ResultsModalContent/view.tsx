import { FunctionComponent } from 'react';

import {
  ChancesResult,
  LoteriaResult,
  LottoResult,
  MonazosResult,
  Product,
  TiemposResult,
} from '@cr-lottery/types';
import { ResultsModalContentProps } from './types';
import { filterData } from './utils';
import { MonazosContent } from '../MonazosContent';
import { TiemposContent } from '../TiemposContent';
import { ChancesContent } from '../ChancesContent';
import { LottoContent } from '../LottoContent';
import { LoteriaContent } from '../LoteriaContent';

const ResultsModalContent: FunctionComponent<ResultsModalContentProps> = ({
  product,
  data,
}) => {
  const filteredData = filterData(product, data);

  if (!filteredData) {
    return null;
  }

  switch (product) {
    case Product.Monazos: {
      return <MonazosContent monazosResult={filteredData as MonazosResult} />;
    }
    case Product.Tiempos: {
      return <TiemposContent tiemposResult={filteredData as TiemposResult} />;
    }
    case Product.Chances: {
      return (
        <ChancesContent chancesResults={filteredData as ChancesResult[]} />
      );
    }
    case Product.Lotto: {
      return <LottoContent lottoResult={filteredData as LottoResult} />;
    }
    case Product.Loteria: {
      return (
        <LoteriaContent loteriaResults={filteredData as LoteriaResult[]} />
      );
    }
    default: {
      return null;
    }
  }
};

export default ResultsModalContent;
