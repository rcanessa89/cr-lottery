type DecoratorFunc = (target: any, key: string | symbol, value: any) => any; // eslint-disable-line

export const ConditionalDecorator = (
  test: boolean,
  decorator: DecoratorFunc
  // eslint-disable-next-line
): ((target: any, key: string | symbol, value: any) => any) => {
  // eslint-disable-next-line
  return (target: any, key: string | symbol, value: any): any => {
    if (test) {
      decorator(target, key, value);
    }
  };
};
