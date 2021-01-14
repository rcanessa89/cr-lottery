import { CfnOutput } from '@aws-cdk/core';
import { Bucket, HttpMethods } from '@aws-cdk/aws-s3';
import { Stack, App, StackProps } from '@serverless-stack/resources';

export default class S3Stack extends Stack {
  readonly bucket: Bucket;

  constructor(scope: App, id: string, props: StackProps) {
    super(scope, id, props);

    this.bucket = new Bucket(this, 'bucketUploads', {
      cors: [
        {
          maxAge: 3000,
          allowedOrigins: ['*'],
          allowedHeaders: ['*'],
          allowedMethods: [
            HttpMethods.GET,
            HttpMethods.POST,
            HttpMethods.PUT,
            HttpMethods.DELETE,
            HttpMethods.DELETE
          ],
        },
      ],
    });

    new CfnOutput(this, 'AttachmentsBucketName', {
      value: this.bucket.bucketName,
    });
  }
}
