export const getLambdaGlobalPrefix = () => {
  const lambdaName = process.env.AWS_LAMBDA_FUNCTION_NAME;
  const stage = process.env.STAGE;
  const service = process.env.SERVICE;

  if (!lambdaName || !stage || !service) {
    return '';
  }

  return lambdaName.replace(`${service}-${stage}-`, '');
};
