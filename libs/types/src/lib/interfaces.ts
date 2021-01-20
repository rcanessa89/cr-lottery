import { INestApplication } from '@nestjs/common';

export interface ObjectLiteral {
  [key: string]: any;
}

export interface RdsInstanceSecret {
  password: string;
  engine: string;
  port: string;
  dbInstanceIdentifier: string;
  host: string;
  username: string;
}

export interface ConfigSwaggerArgs {
  app: INestApplication;
  title?: string;
  description?: string;
  version?: string;
}

export interface ProductBase {
  sorteo_Id: number;
  numeroSorteo: number;
  fecha: string;
  estado: number;
  vigencia: string;
  tipoSorteoCode: string;
  tipoSorteoName: string;
}

export interface LoteriaChancesPrize {
  id: number;
  sorteo: number;
  sorteo_Id: number;
  numero: number;
  serie: number;
  monto: number;
  orden: number;
  tipo: number;
  iN_EsEspecial: boolean;
}

export interface LoteriaNacionalProduct extends ProductBase {
  premios: LoteriaChancesPrize[];
}

export interface ChancesProduct extends ProductBase {
  premios: LoteriaChancesPrize[];
}

export interface LottoProduct extends ProductBase {
  numeros: [number, number, number, number, number];
  numerosRevancha: [number, number, number, number, number];
  premiosLotto: {
    dosAciertos: number;
    tresAciertos: number;
    cuatroAciertos: number;
    cincoAciertos: number;
    acumulado: number;
    dosAciertosRevancha: number;
    tresAciertosRevancha: number;
    cuatroAciertosRevancha: number;
    cincoAciertosRevancha: number;
    acumuladoRevancha: number;
  };
}

export interface TresMonazosProductDraw extends ProductBase {
  hora: 1 | 2;
  numeros: [string | number, string | number, string | number];
}

export interface TresMonazosProduct {
  dia: string;
  manana: TresMonazosProductDraw;
  tarde?: TresMonazosProductDraw;
}

export interface NuevosTiemposProductDraw extends ProductBase {
  hora: 1 | 2;
  numero: number;
  premio: number;
  in_reventado: number;
}

export interface NuevosTiemposProduct {
  dia: string;
  manana: NuevosTiemposProductDraw;
  tarde?: NuevosTiemposProductDraw;
}
