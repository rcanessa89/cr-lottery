import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { AfterLoad, Column, Entity, OneToMany, OneToOne } from 'typeorm';

import { Product } from '@cr-lottery/types';
import { ResultsUnion } from './results.union';
import { BaseGQLEntity } from '../utils/base-gql-entity';
import { LoteriaResult } from '../loteria/loteria-result.entity';
import { ChancesResult } from '../chances/chances-result.entity';
import { LottoResult } from '../lotto/lotto-result.entity';
import { MonazosResult } from '../monazos/monazos-result.entity';
import { TiemposResult } from '../tiempos/tiempos-result.entity';

registerEnumType(Product, { name: 'Product' });

@ObjectType()
@Entity()
export class Draw extends BaseGQLEntity {
  @Field()
  @Column({ type: 'datetime' })
  date: Date;

  @Field()
  @Column({ type: 'datetime' })
  validity: Date;

  @Field(() => Product)
  @Column({
    type: 'enum',
    enum: Product,
  })
  product: Product;

  @OneToMany(() => LoteriaResult, (loteriaResult) => loteriaResult.draw, {
    cascade: true,
  })
  loteriaResults: LoteriaResult[];

  @OneToMany(() => ChancesResult, (chancesResult) => chancesResult.draw, {
    cascade: true,
    onUpdate: 'CASCADE',
  })
  chancesResults: ChancesResult[];

  @OneToOne(() => LottoResult, (lottoResult) => lottoResult.draw, {
    cascade: true,
  })
  lottoResults: LottoResult;

  @OneToMany(() => MonazosResult, (monazosResult) => monazosResult.draw, {
    cascade: true,
  })
  monazosResults: MonazosResult[];

  @OneToMany(() => TiemposResult, (tiemposResult) => tiemposResult.draw, {
    cascade: true,
  })
  tiemposResults: TiemposResult[];

  @Field(() => [ResultsUnion], { nullable: true })
  results:
    | LottoResult[]
    | LoteriaResult[]
    | ChancesResult[]
    | MonazosResult[]
    | TiemposResult[];

  @AfterLoad()
  afterLoad() {
    if (this.lottoResults) {
      this.results = [this.lottoResults];
    } else if (this.loteriaResults?.length) {
      this.results = this.loteriaResults;
    } else if (this.chancesResults?.length) {
      this.results = this.chancesResults;
    } else if (this.monazosResults?.length) {
      this.results = this.monazosResults;
    } else if (this.tiemposResults?.length) {
      this.results = this.tiemposResults;
    }
  }
}
