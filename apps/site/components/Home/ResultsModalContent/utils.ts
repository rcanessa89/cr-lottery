import {
  MonazosQueryResponse,
  TiemposQueryResponse,
  ChancesQueryResponse,
  LottoQueryResponse,
  LoteriaQueryResponse,
} from '@cr-lottery/react-hooks-lib';
import { Product } from '@cr-lottery/types';

import { ResultsModalContentData } from './types';

export const filterData = (product: Product, data: ResultsModalContentData) => {
  switch (product) {
    case Product.Monazos: {
      return (<MonazosQueryResponse>data)?.monazosResults[0];
    }
    case Product.Tiempos: {
      return (<TiemposQueryResponse>data)?.tiemposResults[0];
    }
    case Product.Chances: {
      return (<ChancesQueryResponse>data)?.chancesResults;
    }
    case Product.Lotto: {
      return (<LottoQueryResponse>data)?.lottoResults[0];
    }
    case Product.Loteria: {
      return (<LoteriaQueryResponse>data)?.loteriaResults;
    }
    default: {
      return null;
    }
  }
};
