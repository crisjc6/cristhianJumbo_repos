import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationController } from './organization.controller';
import { OrganizationEntity } from './organization.entity';
import { OrganizationService } from './organization.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrganizationEntity])],
  controllers: [OrganizationController],
  providers: [OrganizationService]
})
export class OrganizationModule {}
