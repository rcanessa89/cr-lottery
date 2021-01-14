import { Stack, App, StackProps } from '@serverless-stack/resources';
import { SubnetType, Vpc } from '@aws-cdk/aws-ec2';

import { VPC_INSTANCE_ID } from '../constants';

export class VpcStack extends Stack {
  public readonly vpc: Vpc;

  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    this.vpc = new Vpc(this, VPC_INSTANCE_ID, {
      cidr: '10.0.0.0/16',
      maxAzs: 2,
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'publicSubnet',
          subnetType: SubnetType.PUBLIC
        }
      ],
      natGateways: 0
    });
  }
}
