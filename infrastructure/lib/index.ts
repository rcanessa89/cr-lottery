import * as sst from "@serverless-stack/resources";
import { config } from 'dotenv';
import { resolve } from 'path';

import { VpcStack } from './stacks/VpcStack';
import { AuroraClusterStack } from './stacks/AuroraClusterStack';
import {
  VPC_STACK_ID,
  AURORA_CLUSTER_STACK_ID
} from './constants';

config({ path: resolve(process.cwd(), '../.env') });

export default function main(app: sst.App): void {
  const vpcEntity = new VpcStack(app, VPC_STACK_ID);

  new AuroraClusterStack(app, AURORA_CLUSTER_STACK_ID, {
    vpc: vpcEntity.vpc
  });
}
