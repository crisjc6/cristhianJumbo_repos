import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { REPOSITORIES } from '../../data/repository.mock';
import { OrganizationEntity } from '../organization/organization.entity';
import { PrincipalService } from '../principal/principal.service';
import { TribeEntity } from '../tribe/tribe.entity';
import { RepositoryEntity } from './repository.entity';
import { createObjectCsvWriter } from "csv-writer";

@Injectable()
export class RepositoryService extends PrincipalService<RepositoryEntity> {

    repositories = REPOSITORIES;

    constructor(
        @InjectRepository(RepositoryEntity) private readonly _repoRepository: Repository<RepositoryEntity>,
    ) {
        super(
            _repoRepository,
            RepositoryEntity
        );
    }

    async getRepositories(): Promise<any> {
        return await new Promise(resolve => {
            resolve(this.repositories);
        });
    }

    async getAllRepositories(idTribe) {
        try {
            const fechaAnual = '2022-01-15  10:41:30.746877';
            const covergaLimit = 50.00;
            const enabled = 'E'
            const repositories = await this.repository
                .createQueryBuilder('repository')
                .leftJoinAndSelect("repository.metrics", "metrics")
                .innerJoinAndSelect('repository.tribe', 'tribe')
                .innerJoinAndSelect('tribe.organization', 'organization')
                .where('metrics.coverage >= :cover AND tribe.idTribe = :id AND repository.state = :estado ', { cover: covergaLimit, id: idTribe, estado: enabled })
                .andWhere('repository.createdA > :start_at', { start_at: fechaAnual })
                .getMany()
            if (repositories.length > 0) {
                const mockRepos = await this.getRepositories();
                const mapInfo = repositories.map((repository, index) => {
                    return {
                        id: repository.idRepository,
                        name: repository.name,
                        tribe: (repository.tribe as TribeEntity).name,
                        organization: ((repository.tribe as TribeEntity).organization as OrganizationEntity).name,
                        coverage: +repository.metrics.coverage,
                        codeSmells: +repository.metrics.code_smells,
                        bugs: +repository.metrics.code_smells,
                        vulnerabilities: +repository.metrics.vulnerabilities,
                        hotspots: repository.metrics.hotspot,
                        verificationState: mockRepos.repositories[index].state === 604 ? 'Verificado' : mockRepos.repositories[index].state === 605 ? 'En espera' : 'Aprobado',
                        state: repository.state === 'E' ? 'Habilitado' : repository.state === 'D' ? 'Deshabilitado' : 'Archivado'
                    }
                })
                const pathCsv  =  __dirname + '/../../public/report.csv';
                
                const csvwriter = createObjectCsvWriter({
                    path: pathCsv,
                    header: [
                        {id: 'id', title: 'ID'},
                        {id: 'name', title: 'NAME'},
                        {id: 'tribe', title: 'TRIBE'},
                        {id: 'organization', title: 'ORGANIZATION'},
                        {id: 'coverage', title: 'COVERAGE'},
                        {id: 'codeSmells', title: 'CODESMELSS'},
                        {id: 'bugs', title: 'BUGS'},
                        {id: 'vulnerabilities', title: 'VULNERABILITIES'},
                        {id: 'hotspots', title: 'HOTSPOTS'},
                        {id: 'verificationState', title: 'VERIFICATION'},
                        {id: 'state', title: 'STATE'},
                    ]
                })
                csvwriter.writeRecords(mapInfo)
                return mapInfo
            } else {
                return { mensaje: 'La Tribu no tiene repositorios que cumplan con la cobertura necesaria', state: 400 };
            }

        } catch (error) {
            console.log('Error ', error);
            return { mensaje: 'La Tribu no se encuentra registrada', state: 400 };
        }
    }
}
