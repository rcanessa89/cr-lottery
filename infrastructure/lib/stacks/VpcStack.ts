import { Stack, App, StackProps } from '@serverless-stack/resources';
import { CfnRoute, SubnetType, Vpc } from '@aws-cdk/aws-ec2';
import { CfnOutput } from '@aws-cdk/core';

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
          subnetType: SubnetType.PUBLIC,
        },
        // {
        //   cidrMask: 24,
        //   name: 'privateSubnet',
        //   subnetType: SubnetType.PRIVATE,
        // },
      ],
      natGateways: 0,
    });

    new CfnOutput(this, 'publicSubnetId', {
      value: this.vpc.publicSubnets[0].subnetId,
      exportName: scope.logicalPrefixedName('publicSubnetId'),
    });

    // new CfnOutput(this, 'privateSubnetId', {
    //   value: this.vpc.privateSubnets[0].subnetId,
    //   exportName: scope.logicalPrefixedName('privateSubnetId'),
    // });
  }
}
