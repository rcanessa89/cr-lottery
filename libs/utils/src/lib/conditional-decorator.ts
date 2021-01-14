type DecoratorFunc = (target: object, key: string | symbol, value: any) => any;

export const ConditionalDecorator = (
  test: boolean,
  decorator: DecoratorFunc,
): (target: object, key: string | symbol, value: any) => any => {
  return (target: object, key: string | symbol, value: any): any => {
    if (test) {
      decorator(target, key, value);
    }
  };
};
