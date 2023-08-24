import { Module } from '@nestjs/common';
import { PostMemoryRepository } from './post-memory.repository.js';
import { PostController } from './post.controller.js';
import { PostService } from './post.service.js';

@Module({
  controllers: [PostController],
  providers: [PostMemoryRepository, PostService],
  exports: [PostMemoryRepository]
})
export class PostModule {}
