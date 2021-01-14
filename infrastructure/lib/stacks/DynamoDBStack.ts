import { CfnOutput } from '@aws-cdk/core';
import { Table, BillingMode, AttributeType } from '@aws-cdk/aws-dynamodb';
import { Stack, App, StackProps } from '@serverless-stack/resources';

export default class DynamoDBStack extends Stack {
  readonly table: Table;

  constructor(scope: App, id: string, props: StackProps) {
    super(scope, id, props);

    const table = new Table(this, 'Table', {
      billingMode: BillingMode.PAY_PER_REQUEST,
      partitionKey: { name: 'PK', type: AttributeType.STRING },
      sortKey: { name: 'SK', type: AttributeType.STRING }
    });

    new CfnOutput(this, 'tableName', {
      value: table.tableName,
      exportName: scope.logicalPrefixedName('TableName'),
    });

    new CfnOutput(this, 'tableArn', {
      value: table.tableArn,
      exportName: scope.logicalPrefixedName('TableArn'),
    });
  }
}
