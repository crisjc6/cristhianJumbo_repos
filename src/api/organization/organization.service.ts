import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal.service';
import { OrganizationEntity } from './organization.entity';

@Injectable()
export class OrganizationService extends PrincipalService<OrganizationEntity>{
    constructor(
        @InjectRepository(OrganizationEntity) _organizationRepository: Repository<OrganizationEntity>,
    ) {
        super(
            _organizationRepository,
            OrganizationEntity
        );
    }
}
