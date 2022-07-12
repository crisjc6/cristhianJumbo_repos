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
  

    @Get('/csv/:id')
    async csvStream( @Param('id') idTribe, @Req() req, @Res({ passthrough: true }) res): Promise<StreamableFile | any> {
      try {
        res.set({
          'Content-Type': 'text/plain'
      });
      const pathCsv  =  __dirname + '/../../public/';
      const guardar = await this._repositoryService.getAllRepositories(idTribe);
      const file = path.join(pathCsv, 'report.csv');
      const readStream = fs.createReadStream(file);
      return new StreamableFile(readStream);
      } catch (error) {
        console.error('Error en controller reporteRepos', error);
        return {
          error: 500,
          message: 'Error al generar reporte ',
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
