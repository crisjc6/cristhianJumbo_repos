import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { PrincipalAbstractController } from '../principal/principal-abstract.controller';
import { CreateOrganizationDto, UpdateOrganizationDto } from './dto/organization.dto';
import { OrganizationService } from './organization.service';

@Controller('organization')
export class OrganizationController  extends PrincipalAbstractController<CreateOrganizationDto>{
    constructor(
        private readonly _organizationService: OrganizationService,
    ) {
        super(
            _organizationService
        )
    }

    @Get(':id')
    async findOne(@Param('id') idOrganization) {
      try {
        const respuesta = await this._organizationService.findOne({where: {
          idOrganization
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
    async update(@Param('id') idOrganization, @Body() registro: UpdateOrganizationDto) {
      return await this._organizationService.findOneByIdAndUpdate(idOrganization, {where: {
        idOrganization
      }},registro);
    }
}
