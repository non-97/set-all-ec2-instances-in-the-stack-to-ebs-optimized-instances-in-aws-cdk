import { aws_ec2 as ec2 } from "aws-cdk-lib";
import { Construct } from "constructs";

export class EbsOptimizedEc2Instance extends ec2.Instance {
  constructor(scope: Construct, id: string, props: ec2.InstanceProps) {
    super(scope, id, props);

    const cfnInstance = this.node.defaultChild as ec2.CfnInstance;
    cfnInstance.ebsOptimized = true;
  }
}
