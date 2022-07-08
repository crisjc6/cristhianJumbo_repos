import { Module } from '@nestjs/common';
import { RepositoryModule } from './repository/repository.module';
import { OrganizationModule } from './organization/organization.module';
import { TribeModule } from './tribe/tribe.module';
import { MetricsModule } from './metrics/metrics.module';

@Module({
  imports: [RepositoryModule, OrganizationModule, TribeModule, MetricsModule]
})
export class ApiModule {}
