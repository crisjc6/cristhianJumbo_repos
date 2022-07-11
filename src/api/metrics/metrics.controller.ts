import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { PrincipalAbstractController } from '../principal/principal-abstract.controller';
import { CreateMetricsDto, UpdateMetricsDto } from './dto/metrics.dto';
import { MetricsService } from './metrics.service';

@Controller('metrics')
export class MetricsController extends PrincipalAbstractController<CreateMetricsDto> {
    constructor(
        private readonly _metricsService: MetricsService,
    ) {
        super(
            _metricsService
        )
    }

    @Get(':id')
    async findOne(@Param('id') idMetrics) {
      try {
        const respuesta = await this._metricsService.findOne({where: {
          idMetrics
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
    async update(@Param('id') idMetrics, @Body() registro: UpdateMetricsDto) {
      return await this._metricsService.findOneByIdAndUpdate(idMetrics, {where: {
        idMetrics
      }},registro);
    }
}
