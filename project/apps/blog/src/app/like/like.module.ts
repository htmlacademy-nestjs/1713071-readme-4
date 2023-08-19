import { Module } from '@nestjs/common';
import { LikeMemoryRepository } from './like-memory.repository';

@Module({
  providers: [ LikeMemoryRepository],
  exports: [LikeMemoryRepository]
})
export class LikeModule {}
