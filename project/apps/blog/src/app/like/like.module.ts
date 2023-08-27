import { Module } from '@nestjs/common';
import { LikeMemoryRepository } from './like-memory.repository.js';
import { LikeController } from './like.controller.js';
import { LikeService } from './like.service.js';

@Module({
  controllers: [LikeController],
  providers: [LikeMemoryRepository, LikeService],
  exports: [LikeMemoryRepository]
})
export class LikeModule {}
