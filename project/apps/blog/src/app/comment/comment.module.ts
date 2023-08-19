import { Module } from '@nestjs/common';
import { CommentMemoryRepository } from './comment-memory.repository';
import { CommentService } from './comment.service';
import { CommentService } from './comment.service';

@Module({
  providers: [CommentMemoryRepository, CommentService],
  exports: [CommentMemoryRepository],
})
export class CommentModule {}
