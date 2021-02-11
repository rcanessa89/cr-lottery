export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**  A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format.  */
  DateTime: any;
};

export type Chances = {
  __typename?: 'Chances';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  order: Scalars['Float'];
  number: Scalars['Float'];
  series: Scalars['Float'];
  prize: Scalars['Float'];
};

export type ChancesResult = {
  __typename?: 'ChancesResult';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  order: Scalars['Float'];
  number: Scalars['Float'];
  series: Scalars['Float'];
  prize: Scalars['Float'];
  draw: Draw;
};

export type ChancesResultWhere = {
  order?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
  series?: Maybe<Scalars['Float']>;
  prize?: Maybe<Scalars['Float']>;
  draw?: Maybe<Scalars['Float']>;
};

export type CreateChancesInput = {
  order: Scalars['Float'];
  number: Scalars['Float'];
  series: Scalars['Float'];
  prize: Scalars['Float'];
};

export type CreateChancesResultInput = {
  order: Scalars['Float'];
  number: Scalars['Float'];
  series: Scalars['Float'];
  prize: Scalars['Float'];
  draw: Scalars['Float'];
};

export type CreateDrawInput = {
  id?: Maybe<Scalars['ID']>;
  date: Scalars['DateTime'];
  validity: Scalars['DateTime'];
  product: Product;
  loteriaResults?: Maybe<Array<CreateLoteriaInput>>;
  chancesResults?: Maybe<Array<CreateChancesInput>>;
  lottoResults?: Maybe<CreateLottoInput>;
  monazosResults?: Maybe<Array<CreateMonazosInput>>;
  tiemposResults?: Maybe<Array<CreateTiemposInput>>;
};

export type CreateLoteriaInput = {
  order: Scalars['Float'];
  number: Scalars['Float'];
  series: Scalars['Float'];
  prize: Scalars['Float'];
};

export type CreateLoteriaResultInput = {
  order: Scalars['Float'];
  number: Scalars['Float'];
  series: Scalars['Float'];
  prize: Scalars['Float'];
  draw: Scalars['Float'];
};

export type CreateLottoInput = {
  numbers: Array<Scalars['Int']>;
  numbersRevenge: Array<Scalars['Int']>;
  dosAciertos: Scalars['Float'];
  tresAciertos: Scalars['Float'];
  cuatroAciertos: Scalars['Float'];
  cincoAciertos: Scalars['Float'];
  acumulado: Scalars['Float'];
  dosAciertosRevancha: Scalars['Float'];
  tresAciertosRevancha: Scalars['Float'];
  cuatroAciertosRevancha: Scalars['Float'];
  cincoAciertosRevancha: Scalars['Float'];
  acumuladoRevancha: Scalars['Float'];
};

export type CreateLottoPrizeInput = {
  numbers: Array<Scalars['Int']>;
  numbersRevenge: Array<Scalars['Int']>;
  dosAciertos: Scalars['Float'];
  tresAciertos: Scalars['Float'];
  cuatroAciertos: Scalars['Float'];
  cincoAciertos: Scalars['Float'];
  acumulado: Scalars['Float'];
  dosAciertosRevancha: Scalars['Float'];
  tresAciertosRevancha: Scalars['Float'];
  cuatroAciertosRevancha: Scalars['Float'];
  cincoAciertosRevancha: Scalars['Float'];
  acumuladoRevancha: Scalars['Float'];
  draw: Scalars['Float'];
};

export type CreateMonazosInput = {
  time: DrawTime;
  numbers: Array<Scalars['Int']>;
};

export type CreateMonazosResultInput = {
  time: DrawTime;
  numbers: Array<Scalars['Int']>;
  draw: Scalars['Float'];
};

export type CreateTiemposInput = {
  time: DrawTime;
  number: Scalars['Float'];
  prize: Scalars['Float'];
};

export type Draw = {
  __typename?: 'Draw';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  date: Scalars['DateTime'];
  validity: Scalars['DateTime'];
  product: Product;
  results?: Maybe<Array<Results>>;
};

export enum DrawTime {
  Morning = 'Morning',
  Afternoon = 'Afternoon',
}

export type DrawWhere = {
  id?: Maybe<Scalars['ID']>;
  date?: Maybe<Scalars['DateTime']>;
  validity?: Maybe<Scalars['DateTime']>;
  product?: Maybe<Product>;
  loteriaResults?: Maybe<Array<CreateLoteriaInput>>;
  chancesResults?: Maybe<Array<CreateChancesInput>>;
  lottoResults?: Maybe<CreateLottoInput>;
  monazosResults?: Maybe<Array<CreateMonazosInput>>;
  tiemposResults?: Maybe<Array<CreateTiemposInput>>;
};

export type FindAllChancesResultsOptions = {
  where: ChancesResultWhere;
  relations?: Maybe<Array<Scalars['String']>>;
  order?: Maybe<FindOrder>;
  skip?: Maybe<Scalars['Float']>;
  take?: Maybe<Scalars['Float']>;
};

export type FindAllDrawsOptions = {
  where: DrawWhere;
  relations?: Maybe<Array<Scalars['String']>>;
  order?: Maybe<FindOrder>;
  skip?: Maybe<Scalars['Float']>;
  take?: Maybe<Scalars['Float']>;
};

export type FindAllLoteriaResultsOptions = {
  where: LoteriaResultWhere;
  relations?: Maybe<Array<Scalars['String']>>;
  order?: Maybe<FindOrder>;
  skip?: Maybe<Scalars['Float']>;
  take?: Maybe<Scalars['Float']>;
};

export type FindAllLottoPrizesOptions = {
  where: LottoPrizeWhere;
  relations?: Maybe<Array<Scalars['String']>>;
  order?: Maybe<FindOrder>;
  skip?: Maybe<Scalars['Float']>;
  take?: Maybe<Scalars['Float']>;
};

export type FindAllMonazosResultsOptions = {
  where: MonazosResultWhere;
  relations?: Maybe<Array<Scalars['String']>>;
  order?: Maybe<FindOrder>;
  skip?: Maybe<Scalars['Float']>;
  take?: Maybe<Scalars['Float']>;
};

export type FindOneChancesResultOptions = {
  where: ChancesResultWhere;
  relations?: Maybe<Array<Scalars['String']>>;
  order?: Maybe<FindOrder>;
};

export type FindOneDrawOptions = {
  where: DrawWhere;
  relations?: Maybe<Array<Scalars['String']>>;
  order?: Maybe<FindOrder>;
};

export type FindOneLoteriaResultOptions = {
  where: LoteriaResultWhere;
  relations?: Maybe<Array<Scalars['String']>>;
  order?: Maybe<FindOrder>;
};

export type FindOneLottoPrizeOptions = {
  where: LottoPrizeWhere;
  relations?: Maybe<Array<Scalars['String']>>;
  order?: Maybe<FindOrder>;
};

export type FindOneMonazosResultOptions = {
  where: MonazosResultWhere;
  relations?: Maybe<Array<Scalars['String']>>;
  order?: Maybe<FindOrder>;
};

export enum FindOrder {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type Loteria = {
  __typename?: 'Loteria';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  order: Scalars['Float'];
  number: Scalars['Float'];
  series: Scalars['Float'];
  prize: Scalars['Float'];
};

export type LoteriaResult = {
  __typename?: 'LoteriaResult';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  order: Scalars['Float'];
  number: Scalars['Float'];
  series: Scalars['Float'];
  prize: Scalars['Float'];
  draw: Draw;
};

export type LoteriaResultWhere = {
  order?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
  series?: Maybe<Scalars['Float']>;
  prize?: Maybe<Scalars['Float']>;
  draw?: Maybe<Scalars['Float']>;
};

export type Lotto = {
  __typename?: 'Lotto';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  numbers: Array<Scalars['Int']>;
  numbersRevenge: Array<Scalars['Int']>;
  dosAciertos: Scalars['Float'];
  tresAciertos: Scalars['Float'];
  cuatroAciertos: Scalars['Float'];
  cincoAciertos: Scalars['Float'];
  acumulado: Scalars['Float'];
  dosAciertosRevancha: Scalars['Float'];
  tresAciertosRevancha: Scalars['Float'];
  cuatroAciertosRevancha: Scalars['Float'];
  cincoAciertosRevancha: Scalars['Float'];
  acumuladoRevancha: Scalars['Float'];
};

export type LottoPrizeWhere = {
  numbers?: Maybe<Array<Scalars['Int']>>;
  numbersRevenge?: Maybe<Array<Scalars['Int']>>;
  dosAciertos?: Maybe<Scalars['Float']>;
  tresAciertos?: Maybe<Scalars['Float']>;
  cuatroAciertos?: Maybe<Scalars['Float']>;
  cincoAciertos?: Maybe<Scalars['Float']>;
  acumulado?: Maybe<Scalars['Float']>;
  dosAciertosRevancha?: Maybe<Scalars['Float']>;
  tresAciertosRevancha?: Maybe<Scalars['Float']>;
  cuatroAciertosRevancha?: Maybe<Scalars['Float']>;
  cincoAciertosRevancha?: Maybe<Scalars['Float']>;
  acumuladoRevancha?: Maybe<Scalars['Float']>;
  draw?: Maybe<Scalars['Float']>;
};

export type LottoResult = {
  __typename?: 'LottoResult';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  numbers: Array<Scalars['Int']>;
  numbersRevenge: Array<Scalars['Int']>;
  dosAciertos: Scalars['Float'];
  tresAciertos: Scalars['Float'];
  cuatroAciertos: Scalars['Float'];
  cincoAciertos: Scalars['Float'];
  acumulado: Scalars['Float'];
  dosAciertosRevancha: Scalars['Float'];
  tresAciertosRevancha: Scalars['Float'];
  cuatroAciertosRevancha: Scalars['Float'];
  cincoAciertosRevancha: Scalars['Float'];
  acumuladoRevancha: Scalars['Float'];
  draw: Draw;
};

export type Monazos = {
  __typename?: 'Monazos';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  time: DrawTime;
  numbers: Array<Scalars['Int']>;
};

export type MonazosResult = {
  __typename?: 'MonazosResult';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  time: DrawTime;
  numbers: Array<Scalars['Int']>;
  draw: Draw;
};

export type MonazosResultWhere = {
  time?: Maybe<DrawTime>;
  numbers?: Maybe<Array<Scalars['Int']>>;
  draw?: Maybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createChancesResult: ChancesResult;
  updateChancesResult: ChancesResult;
  removeChancesResult: RemoveResult;
  createLoteriaResult: LoteriaResult;
  updateLoteriaResult: LoteriaResult;
  removeLoteriaResult: RemoveResult;
  createLottoResult: LottoResult;
  updateLottoResult: LottoResult;
  removeLottoResult: RemoveResult;
  createMonazosResult: MonazosResult;
  updateMonazosResult: MonazosResult;
  removeMonazosResult: RemoveResult;
  createDraw: Draw;
  updateDraw: Draw;
  removeDraw: RemoveResult;
};

export type MutationCreateChancesResultArgs = {
  createChancesResultInput: CreateChancesResultInput;
};

export type MutationUpdateChancesResultArgs = {
  updateChancesResultInput: UpdateChancesResultInput;
};

export type MutationRemoveChancesResultArgs = {
  id: Scalars['ID'];
};

export type MutationCreateLoteriaResultArgs = {
  createLoteriaResultInput: CreateLoteriaResultInput;
};

export type MutationUpdateLoteriaResultArgs = {
  updateLoteriaResultInput: UpdateLoteriaResultInput;
};

export type MutationRemoveLoteriaResultArgs = {
  id: Scalars['ID'];
};

export type MutationCreateLottoResultArgs = {
  createLottoPrizeInput: CreateLottoPrizeInput;
};

export type MutationUpdateLottoResultArgs = {
  updateLottoResultInput: UpdateLottoResultInput;
};

export type MutationRemoveLottoResultArgs = {
  id: Scalars['ID'];
};

export type MutationCreateMonazosResultArgs = {
  createMonazosResultInput: CreateMonazosResultInput;
};

export type MutationUpdateMonazosResultArgs = {
  updateMonazosResultInput: UpdateMonazosResultInput;
};

export type MutationRemoveMonazosResultArgs = {
  id: Scalars['ID'];
};

export type MutationCreateDrawArgs = {
  createDrawInput: CreateDrawInput;
};

export type MutationUpdateDrawArgs = {
  updateDrawInput: UpdateDrawInput;
};

export type MutationRemoveDrawArgs = {
  id: Scalars['ID'];
};

export enum Product {
  Chances = 'Chances',
  Loteria = 'Loteria',
  Lotto = 'Lotto',
  Monazos = 'Monazos',
  Tiempos = 'Tiempos',
}

export type Query = {
  __typename?: 'Query';
  chancesResults: Array<ChancesResult>;
  chancesResult: ChancesResult;
  countChancesResult: Scalars['Int'];
  loteriaResults: Array<LoteriaResult>;
  loteriaResult: LoteriaResult;
  countLoteriaResult: Scalars['Int'];
  lottoResults: Array<LottoResult>;
  lottoResult: LottoResult;
  countLottoResult: Scalars['Int'];
  monazosResults: Array<MonazosResult>;
  monazosResult: MonazosResult;
  countMonazosResult: Scalars['Int'];
  draws: Array<Draw>;
  draw: Draw;
  countDraw: Scalars['Int'];
};

export type QueryChancesResultsArgs = {
  FindAllChancesResultsOptions: FindAllChancesResultsOptions;
};

export type QueryChancesResultArgs = {
  FindOneChancesResultOptions: FindOneChancesResultOptions;
  id: Scalars['Int'];
};

export type QueryLoteriaResultsArgs = {
  FindAllLoteriaResultsOptions: FindAllLoteriaResultsOptions;
};

export type QueryLoteriaResultArgs = {
  FindOneLoteriaResultOptions: FindOneLoteriaResultOptions;
  id: Scalars['Int'];
};

export type QueryLottoResultsArgs = {
  FindAllLottoResultsOptions: FindAllLottoPrizesOptions;
};

export type QueryLottoResultArgs = {
  FindOneLottoResultOptions: FindOneLottoPrizeOptions;
  id: Scalars['Int'];
};

export type QueryMonazosResultsArgs = {
  FindAllMonazosResultsOptions: FindAllMonazosResultsOptions;
};

export type QueryMonazosResultArgs = {
  FindOneMonazosResultOptions: FindOneMonazosResultOptions;
  id: Scalars['Int'];
};

export type QueryDrawsArgs = {
  FindAllDrawsOptions: FindAllDrawsOptions;
};

export type QueryDrawArgs = {
  FindOneDrawOptions: FindOneDrawOptions;
  id: Scalars['Int'];
};

export type RemoveResult = {
  __typename?: 'RemoveResult';
  affected?: Maybe<Scalars['Float']>;
};

export type Results = Loteria | Chances | Lotto | Monazos | Tiempos;

export type Tiempos = {
  __typename?: 'Tiempos';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  time: DrawTime;
  number: Scalars['Float'];
  prize: Scalars['Float'];
};

export type UpdateChancesResultInput = {
  order?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
  series?: Maybe<Scalars['Float']>;
  prize?: Maybe<Scalars['Float']>;
  draw?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
};

export type UpdateDrawInput = {
  date: Scalars['DateTime'];
  validity: Scalars['DateTime'];
  product: Product;
  id: Scalars['ID'];
};

export type UpdateLoteriaResultInput = {
  order?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
  series?: Maybe<Scalars['Float']>;
  prize?: Maybe<Scalars['Float']>;
  draw?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
};

export type UpdateLottoResultInput = {
  numbers?: Maybe<Array<Scalars['Int']>>;
  numbersRevenge?: Maybe<Array<Scalars['Int']>>;
  dosAciertos?: Maybe<Scalars['Float']>;
  tresAciertos?: Maybe<Scalars['Float']>;
  cuatroAciertos?: Maybe<Scalars['Float']>;
  cincoAciertos?: Maybe<Scalars['Float']>;
  acumulado?: Maybe<Scalars['Float']>;
  dosAciertosRevancha?: Maybe<Scalars['Float']>;
  tresAciertosRevancha?: Maybe<Scalars['Float']>;
  cuatroAciertosRevancha?: Maybe<Scalars['Float']>;
  cincoAciertosRevancha?: Maybe<Scalars['Float']>;
  acumuladoRevancha?: Maybe<Scalars['Float']>;
  draw?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
};

export type UpdateMonazosResultInput = {
  time?: Maybe<DrawTime>;
  numbers?: Maybe<Array<Scalars['Int']>>;
  draw?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
};
