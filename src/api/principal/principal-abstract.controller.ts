import {
    Controller,
    Get,
    Body,
    Param,
    Post,
    Query,
    Req,
    Res,
    Delete,
    Put,
  } from '@nestjs/common';
import { InterfaceError } from './interfaces/error.interface';
  
  export abstract class PrincipalAbstractController<CreateDto> {
    private readonly _servicio;
    constructor(servicio: any) {
      this._servicio = servicio;
    }
    @Get()
    async findAll(
      @Query('criterioBusqueda') criterioBusqueda,
    ): Promise<CreateDto[] | InterfaceError> {
      if (!criterioBusqueda) {
        return await this._servicio.find();
      }
      return await this._servicio.find(JSON.parse(criterioBusqueda));
    }

    @Post()
    async create(@Body() registro: CreateDto) {
      return await this._servicio.create(registro);
    }


    @Delete(':id')
    async delete(@Param('id') id) {
      return await this._servicio.delete(id);
    }
  }