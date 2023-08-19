import { Module } from '@nestjs/common';
import { PostMemoryRepository } from './post-memory.repository';

@Module({
  providers: [PostMemoryRepository],
  exports: [PostMemoryRepository]
})
export class PostModule {}
