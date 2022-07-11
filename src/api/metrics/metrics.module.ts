import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetricsController } from './metrics.controller';
import { MetricsEntity } from './metrics.entity';
import { MetricsService } from './metrics.service';

@Module({
  imports: [TypeOrmModule.forFeature([MetricsEntity])],
  controllers: [MetricsController],
  providers: [MetricsService]
})
export class MetricsModule {}
