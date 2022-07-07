import { Injectable } from '@nestjs/common';
import { REPOSITORIES } from '../../data/repository.mock';

@Injectable()
export class RepositoryService {

    repositories = REPOSITORIES;

    getRepositories(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.repositories);
        });
    }

}
