import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal.service';
import { MetricsEntity } from './metrics.entity';

@Injectable()
export class MetricsService extends PrincipalService<MetricsEntity>{
    constructor(
        @InjectRepository(MetricsEntity) _metricsRepository: Repository<MetricsEntity>,
    ) {
        super(
            _metricsRepository,
            MetricsEntity
        );
    }
}
