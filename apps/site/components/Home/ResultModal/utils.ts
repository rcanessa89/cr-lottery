import { Product } from '@cr-lottery/types';
import {
  useMonazosLazyQuery,
  useTiemposLazyQuery,
  useChancesLazyQuery,
  useLottoLazyQuery,
  useLoteriaLazyQuery,
} from '@cr-lottery/react-hooks-lib';

export const getQueryHook = (product: Product) => {
  switch (product) {
    case Product.Monazos: {
      return useMonazosLazyQuery;
    }
    case Product.Tiempos: {
      return useTiemposLazyQuery;
    }
    case Product.Chances: {
      return useChancesLazyQuery;
    }
    case Product.Lotto: {
      return useLottoLazyQuery;
    }
    case Product.Loteria: {
      return useLoteriaLazyQuery;
    }
    default: {
      return null;
    }
  }
};
