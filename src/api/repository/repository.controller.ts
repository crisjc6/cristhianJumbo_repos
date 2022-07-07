import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { RepositoryService } from './repository.service';

@Controller('repository')
export class RepositoryController {

    constructor(
        private _repositoryService: RepositoryService,
    ) {

    }

    @Get()
    async getRepositories(@Res() res) {
         const repositories = await this._repositoryService.getRepositories();
         return res.status(HttpStatus.OK).json(repositories);
    }
}
