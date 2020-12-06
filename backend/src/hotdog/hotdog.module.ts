import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HotdogEntity } from './hotdog.entity';
import { HotdogService } from './hotdog.service';
import { HotdogController } from './hotdog.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HotdogEntity])],
  providers: [HotdogService],
  exports: [HotdogService, TypeOrmModule],
  controllers: [HotdogController],
})
export class HotdogModule {}
