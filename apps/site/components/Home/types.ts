import { Product } from '@cr-lottery/types';

export interface DrawsQueryResponse {
  id: number;
  date: string;
  product: Product;
}

export interface HomeProps {
  draws: DrawsQueryResponse[];
}
