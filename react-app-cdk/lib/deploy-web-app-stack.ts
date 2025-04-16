import { Stack, type StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ReactAppCdkStack } from './react-app-cdk-stack';

export class DeployWebAppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new ReactAppCdkStack(this, 'deployment');
  }
}
