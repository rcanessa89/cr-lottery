type DecoratorFunc = (target: any, key: string | symbol, value: any) => any; // eslint-disable-line

export const ConditionalDecorator = (
  test: boolean,
  decorator: DecoratorFunc
): ((target: any, key: string | symbol, value: any) => any) => {
  // eslint-disable-line
  return (target: any, key: string | symbol, value: any): any => {
    // eslint-disable-line
    if (test) {
      decorator(target, key, value);
    }
  };
};
