import { Stack, App, StackProps } from '@serverless-stack/resources';
import { Vpc, SubnetType, Peer, Port } from '@aws-cdk/aws-ec2';
import {
  DatabaseInstance,
  ServerlessCluster,
  DatabaseClusterEngine,
} from '@aws-cdk/aws-rds';
import { CfnOutput } from '@aws-cdk/core';

import { SERVERLESS_CLUSTER_ID, DB_NAME } from '../constants';

export interface AuroraClusterStackProps extends StackProps {
  vpc: Vpc;
}

export class AuroraClusterStack extends Stack {
  readonly mySQLRDSInstance: DatabaseInstance;
  readonly auroraCluster: ServerlessCluster;

  constructor(scope: App, id: string, props: AuroraClusterStackProps) {
    super(scope, id, props);

    const stage = process.env.STAGE as string;

    this.auroraCluster = new ServerlessCluster(this, SERVERLESS_CLUSTER_ID, {
      engine: DatabaseClusterEngine.AURORA_MYSQL,
      vpc: props.vpc,
      clusterIdentifier: 'cr-lottery-cluster',
      defaultDatabaseName: `${DB_NAME}${
        stage.charAt(0).toUpperCase() + stage.slice(1)
      }`,
      deletionProtection: false,
      enableDataApi: true,
      vpcSubnets: { subnetType: SubnetType.PUBLIC },
    });

    this.auroraCluster.connections.securityGroups[0].addIngressRule(
      Peer.ipv4('0.0.0.0/0'),
      Port.tcp(3306)
    );

    if (this.auroraCluster.secret?.secretValue) {
      new CfnOutput(this, 'dbSecret', {
        value: `${this.auroraCluster.secret.secretValue.toString()}`,
        exportName: scope.logicalPrefixedName('dbSecret'),
      });
    }

    new CfnOutput(this, 'securityGroupId', {
      value: this.auroraCluster.connections.securityGroups[0].securityGroupId,
      exportName: scope.logicalPrefixedName('securityGroupId'),
    });
  }
}
