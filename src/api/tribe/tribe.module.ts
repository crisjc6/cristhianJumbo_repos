import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TribeController } from './tribe.controller';
import { TribeEntity } from './tribe.entity';
import { TribeService } from './tribe.service';

@Module({
  imports: [TypeOrmModule.forFeature([TribeEntity])],
  controllers: [TribeController],
  providers: [TribeService]
})
export class TribeModule {}
