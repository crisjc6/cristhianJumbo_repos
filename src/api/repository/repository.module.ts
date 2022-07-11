import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RepositoryController } from './repository.controller';
import { RepositoryEntity } from './repository.entity';
import { RepositoryService } from './repository.service';

@Module({
  imports: [TypeOrmModule.forFeature([RepositoryEntity])],
  controllers: [RepositoryController],
  providers: [RepositoryService]
})
export class RepositoryModule {}
