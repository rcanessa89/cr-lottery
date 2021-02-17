import {
  MonazosQueryResponse,
  TiemposQueryResponse,
  ChancesQueryResponse,
  LoteriaQueryResponse,
  LottoQueryResponse,
} from '@cr-lottery/react-hooks-lib';
import { Product } from '@cr-lottery/types';

export type ResultsModalContentData =
  | MonazosQueryResponse
  | TiemposQueryResponse
  | ChancesQueryResponse
  | LoteriaQueryResponse
  | LottoQueryResponse;

export interface ResultsModalContentProps {
  product: Product;
  data: ResultsModalContentData;
  date: Date;
}
