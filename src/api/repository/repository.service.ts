import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { REPOSITORIES } from '../../data/repository.mock';
import { PrincipalService } from '../principal/principal.service';
import { RepositoryEntity } from './repository.entity';

@Injectable()
export class RepositoryService extends PrincipalService<RepositoryEntity> {

    repositories = REPOSITORIES;

    constructor(
        @InjectRepository(RepositoryEntity) _repoRepository: Repository<RepositoryEntity>,
    ) {
        super(
            _repoRepository,
            RepositoryEntity
        );
    }

    getRepositories(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.repositories);
        });
    }

}
