import { Module } from '@nestjs/common';
import { TribeController } from './tribe.controller';
import { TribeService } from './tribe.service';

@Module({
  controllers: [TribeController],
  providers: [TribeService]
})
export class TribeModule {}
