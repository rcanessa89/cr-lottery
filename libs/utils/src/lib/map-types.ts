import { Type } from '@nestjs/common';

export const mapTypes = <T>(
  decoratorFactory: (
    c: { new (): unknown },
    k?: string
  ) => {
    Decorator: (m?: unknown) => ClassDecorator;
    metadata: unknown[];
  },
  // eslint-disable-next-line
  mapFunction: (c: { new (): unknown }, k?: string) => any,
  classes: { [key: string]: { new (): unknown } }
): { [key in keyof T]: Type<unknown> } => {
  const map = {} as { [key in keyof T]: Type<unknown> };

  Object.entries(classes).forEach(([name, c]) => {
    const { Decorator, metadata } = decoratorFactory(c, name);

    @Decorator(...metadata)
    class MappedClass extends mapFunction(c, name) {}

    Object.defineProperty(MappedClass, 'name', {
      value: name,
    });

    map[name] = MappedClass;
  });

  return map;
};
