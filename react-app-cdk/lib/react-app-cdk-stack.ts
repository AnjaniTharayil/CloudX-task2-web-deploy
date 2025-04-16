import {
  aws_cloudfront,
  aws_cloudfront_origins,
  aws_s3,
  aws_s3_deployment,
  CfnOutput,
  RemovalPolicy
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

const path = './resource/build';

export class ReactAppCdkStack extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const hostingBucket = new aws_s3.Bucket(this, 'ReactAppBucket', {
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'index.html',
      blockPublicAccess: aws_s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: RemovalPolicy.DESTROY, // Automatically delete bucket on stack destroy
    });

    const distribution = new aws_cloudfront.Distribution(
      this,
      'CloudfrontDistribution',
      {
        defaultBehavior: {
          origin: aws_cloudfront_origins.S3BucketOrigin.withOriginAccessControl(
            hostingBucket
          ),
          viewerProtocolPolicy: aws_cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        },
        defaultRootObject: 'index.html',
        errorResponses: [
          {
            httpStatus: 404,
            responseHttpStatus: 200,
            responsePagePath: '/index.html',
          },
        ],
      }
    );

    new aws_s3_deployment.BucketDeployment(this, 'BucketDeployment', {
      sources: [aws_s3_deployment.Source.asset(path)],
      destinationBucket: hostingBucket,
      distribution, // Connect CloudFront to invalidate cache automatically
      distributionPaths: ['/*'], // Invalidate all paths on update
    });
     // Output the CloudFront distribution URL
    new CfnOutput(this, 'CloudFrontURL', {
      value: distribution.domainName,
      description: 'The distribution URL',
      exportName: 'CloudfrontURL',
    });
     // Output the S3 bucket name
    new CfnOutput(this, 'BucketName', {
      value: hostingBucket.bucketName,
      description: 'The name of the S3 bucket',
      exportName: 'BucketName',
    });
  }
}