import { Body, Controller, Get, HttpStatus, Param, Put, Req, Res, StreamableFile } from '@nestjs/common';
import { PrincipalAbstractController } from '../principal/principal-abstract.controller';
import { CreateRepositoryDto, UpdateRepositoryDto } from './dto/repository.dto';
import { RepositoryService } from './repository.service';
import * as fs from 'fs';
import * as path from 'path';
@Controller('repository')
export class RepositoryController extends PrincipalAbstractController<CreateRepositoryDto> {

    constructor(
        private _repositoryService: RepositoryService,
    ) {
        super(
            _repositoryService
        )
    }

    @Get('mock')
    async getRepositories(@Res() res) {
         const repositories = await this._repositoryService.getRepositories();
         return res.status(HttpStatus.OK).json(repositories);
    }

    @Get('/query/:id')
    async customFindRespositories(@Param('id') idTribe) {
      try {
        return this._repositoryService.getAllRepositories(idTribe);
      } catch (error) {
        console.error('Error en controller customFindRespositories', error);
        return {
          error: 500,
          message: 'Error al encontrar ',
        };
      }
    }
  



    @Get(':id')
    async findOne(@Param('id') idRepository) {
      try {
        const respuesta = await this._repositoryService.findOne({where: {
          idRepository
        }});
        if(respuesta) {
          return respuesta
        }
        else {
          return {}
        }
      } catch (error) {
        console.error('Error en controller findOne', error);
        return {
          error: 500,
          message: 'Error al encontrar ',
        };
      }
    }

    @Put(':id')
    async update(@Param('id') idRepository, @Body() registro: UpdateRepositoryDto) {
      return await this._repositoryService.findOneByIdAndUpdate(idRepository, {where: {
        idRepository
      }},registro);
    }
}
