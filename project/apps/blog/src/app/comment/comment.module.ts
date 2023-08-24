import { Module } from '@nestjs/common';
import { CommentMemoryRepository } from './comment-memory.repository.js';
import { CommentService } from './comment.service.js';
import { CommentController } from './comment.controller.js';

@Module({
  controllers: [CommentController],
  providers: [CommentMemoryRepository, CommentService],
  exports: [CommentMemoryRepository],
})
export class CommentModule {}
