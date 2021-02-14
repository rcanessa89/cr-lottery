import { Stack, App, StackProps } from '@serverless-stack/resources';
import {
  InstanceClass,
  InstanceSize,
  InstanceType,
  Vpc,
  SubnetType,
  Peer,
  Port,
} from '@aws-cdk/aws-ec2';
import {
  DatabaseInstance,
  DatabaseInstanceEngine,
  MysqlEngineVersion,
  StorageType,
} from '@aws-cdk/aws-rds';
import { CfnOutput } from '@aws-cdk/core';

import { DB_NAME } from '../constants';

export interface MySQLStackProps extends StackProps {
  vpc: Vpc;
}

export class MySQLStack extends Stack {
  readonly mySQLRDSInstance: DatabaseInstance;

  constructor(scope: App, id: string, props: MySQLStackProps) {
    super(scope, id, props);

    const stage = process.env.STAGE as string;

    this.mySQLRDSInstance = new DatabaseInstance(this, 'mysqlInstance', {
      engine: DatabaseInstanceEngine.mysql({
        version: MysqlEngineVersion.VER_8_0_20,
      }),
      vpc: props.vpc,
      instanceType: InstanceType.of(InstanceClass.T2, InstanceSize.MICRO),
      allocatedStorage: 20,
      storageType: StorageType.GP2,
      vpcSubnets: { subnetType: SubnetType.PUBLIC },
      multiAz: false,
      deletionProtection: false,
      databaseName: `${DB_NAME}${
        stage.charAt(0).toUpperCase() + stage.slice(1)
      }`,
    });

    this.mySQLRDSInstance.connections.securityGroups[0].addIngressRule(
      Peer.ipv4('0.0.0.0/0'),
      Port.tcp(3306)
    );

    if (this.mySQLRDSInstance.secret?.secretValue) {
      new CfnOutput(this, 'dbSecret', {
        value: `${this.mySQLRDSInstance.secret.secretValue.toString()}`,
        exportName: scope.logicalPrefixedName('dbSecret'),
      });
    }

    new CfnOutput(this, 'securityGroupId', {
      value: this.mySQLRDSInstance.connections.securityGroups[0]
        .securityGroupId,
      exportName: scope.logicalPrefixedName('securityGroupId'),
    });
  }
}
