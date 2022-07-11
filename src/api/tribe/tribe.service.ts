import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal.service';
import { TribeEntity } from './tribe.entity';

@Injectable()
export class TribeService extends PrincipalService<TribeEntity> {
    constructor(
        @InjectRepository(TribeEntity) _tribeRepository: Repository<TribeEntity>,
    ) {
        super(
            _tribeRepository,
            TribeEntity
        );
    }
}
