import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { PrincipalAbstractController } from '../principal/principal-abstract.controller';
import { CreateTribeDto, UpdateTribeDto } from './dto/tribe.dto';
import { TribeService } from './tribe.service';

@Controller('tribe')
export class TribeController extends PrincipalAbstractController<CreateTribeDto> {
    constructor(
        private readonly _tribeService: TribeService,
    ) {
        super(
            _tribeService
        )
    }

    @Get(':id')
    async findOne(@Param('id') idTribe) {
      try {
        const respuesta = await this._tribeService.findOne({where: {
          idTribe
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
    async update(@Param('id') idTribe, @Body() registro: UpdateTribeDto) {
      return await this._tribeService.findOneByIdAndUpdate(idTribe, {where: {
        idTribe
      }},registro);
    }
}