import { CfnOutput } from '@aws-cdk/core';
import { UserPool, UserPoolClient } from '@aws-cdk/aws-cognito';
import { Stack, App, StackProps } from '@serverless-stack/resources';

export class CognitoStack extends Stack {
  readonly userPool: UserPool;
  readonly userPoolClient: UserPoolClient;

  constructor(scope: App, id: string, props: StackProps) {
    super(scope, id, props);

    this.userPool = new UserPool(this, 'userPool', {
      selfSignUpEnabled: true,
      autoVerify: { email: true },
      signInAliases: { email: true }
    });

    this.userPoolClient = new UserPoolClient(this, 'userPoolClient', {
      userPool: this.userPool,
      generateSecret: false
    });

    new CfnOutput(this, 'userPoolId', {
      value: this.userPool.userPoolId
    });

    new CfnOutput(this, 'userPoolClientId', {
      value: this.userPoolClient.userPoolClientId
    });
  }
}
