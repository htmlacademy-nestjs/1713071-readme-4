import { Module } from '@nestjs/common';
import { PostController } from './post/post.controller.js';
import { PostMemoryRepository } from './post/post-memory.repository.js';
import { PostService } from './post/post.service.js';

@Module({
  controllers: [PostController],
  providers: [PostMemoryRepository, PostService],
})
export class AppModule {}
