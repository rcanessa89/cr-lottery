import { Body, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

// eslint-disable-next-line
export const controllerFactory = (): any => {
  abstract class BaseController {
    protected readonly service;

    constructor(service) {
      this.service = service;
    }

    @Post()
    create(@Body() createUserDto) {
      return this.service.create(createUserDto);
    }

    @Get()
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
    count() {
      return this.service.count();
    }

    @Get(':id')
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

    @Put(':id')
    update(@Param('id') id: string | number, @Body() updateUserDto) {
      return this.service.update(id, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string | number) {
      return this.service.remove(id);
    }
  }

  return BaseController;
};
