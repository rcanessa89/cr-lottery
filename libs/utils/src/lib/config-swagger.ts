import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { ConfigSwaggerArgs } from '@cr-lottery/types';

export const configSwagger = ({
  app,
  title = '',
  description = '',
  version = ''
}: ConfigSwaggerArgs): void => {
  const options = new DocumentBuilder()
    .setTitle(title)
    .setDescription(description)
    .setVersion(version)
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);
};
