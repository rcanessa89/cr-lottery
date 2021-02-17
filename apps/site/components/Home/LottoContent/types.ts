import { LottoResult } from '@cr-lottery/types';

export interface LottoContentProps {
  lottoResult: LottoResult;
}

export interface LottoItem {
  title: string;
  numbers: string[];
  prizes: string[];
}
