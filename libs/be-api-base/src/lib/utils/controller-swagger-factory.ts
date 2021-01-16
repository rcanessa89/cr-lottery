import { Body, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import {
  ApiTags,
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiQuery,
  ApiOkResponse,
  ApiParam,
} from '@nestjs/swagger';

import {
  filterMetadata,
  pluralize,
  ConditionalDecorator,
} from '@cr-lottery/utils';
import { ControllerSwaggerFactoryArgs } from '../types/interfaces';

const metadataKey = 'swagger/apiModelPropertiesArray';
const excludedCreateMetadata = [':id', ':createdAt', ':updatedAt'];
const excludedUpdateMetadata = [':createdAt', ':updatedAt'];

export const controllerSwaggerFactory = <T, C, U>({
  Entity,
  CreateVM,
  UpdateVM,
  ApiException,
}: ControllerSwaggerFactoryArgs<T, C, U>): any => {
  // eslint-disable-line
  const ctrlApiTag = pluralize(Entity.name);
  const createEntityName = `Create${Entity.name}`;
  const updateEntityName = `Update${Entity.name}`;

  CreateVM =
    CreateVM ||
    filterMetadata(
      Entity,
      metadataKey,
      excludedCreateMetadata,
      createEntityName
    );
  UpdateVM =
    UpdateVM ||
    filterMetadata(
      Entity,
      metadataKey,
      excludedUpdateMetadata,
      updateEntityName
    );

  @ApiTags(ctrlApiTag)
  abstract class BaseController {
    protected readonly service;

    constructor(service) {
      this.service = service;
    }

    @Post()
    @ApiBody({
      type: CreateVM,
      isArray: false,
    })
    @ApiCreatedResponse({ type: Entity })
    @ConditionalDecorator(
      !!ApiException,
      ApiBadRequestResponse({ type: ApiException })
    )
    create(@Body() createUserDto) {
      return this.service.create(createUserDto);
    }

    @Get()
    @ApiQuery({
      name: 'options',
      description: 'ORM find all options',
      required: false,
    })
    @ApiOkResponse({
      type: Entity,
      isArray: true,
    })
    @ConditionalDecorator(
      !!ApiException,
      ApiBadRequestResponse({ type: ApiException })
    )
    root(@Query('options') options: string) {
      let optionsObj = null;

      try {
        optionsObj = JSON.parse(options);
      } catch (e) {
        optionsObj = {};
      }

      return this.service.findAll(optionsObj);
    }

    @Get('count')
    @ConditionalDecorator(
      !!ApiException,
      ApiBadRequestResponse({ type: ApiException })
    )
    count() {
      return this.service.count();
    }

    @Get(':id')
    @ApiQuery({
      name: 'options',
      description: 'ORM find one options',
      required: false,
    })
    @ApiParam({
      name: 'id',
      description: 'Entity ID',
    })
    @ApiOkResponse({ type: Entity })
    @ConditionalDecorator(
      !!ApiException,
      ApiBadRequestResponse({ type: ApiException })
    )
    findOne(
      @Param('id') id: string | number,
      @Query('options') options: string
    ) {
      let optionsObj = null;

      try {
        optionsObj = JSON.parse(options);
      } catch (e) {
        optionsObj = {};
      }

      return this.service.findOne(id, optionsObj);
    }

    @Put()
    @ApiBody({
      type: UpdateVM,
      isArray: false,
    })
    @ApiCreatedResponse({ type: Entity })
    @ConditionalDecorator(
      !!ApiException,
      ApiBadRequestResponse({ type: ApiException })
    )
    update(@Body() updateUserDto) {
      return this.service.update(updateUserDto);
    }

    @Delete(':id')
    @ApiParam({
      name: 'id',
      description: 'Entity ID',
    })
    remove(@Param('id') id: string | number) {
      return this.service.remove(id);
    }
  }

  return BaseController;
};
