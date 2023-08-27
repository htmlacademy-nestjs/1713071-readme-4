import { Module } from '@nestjs/common';
import { CommentMemoryRepository } from './comment-memory.repository';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';

@Module({
  controllers: [CommentController],
  providers: [CommentMemoryRepository, CommentService],
  exports: [CommentMemoryRepository],
})
export class CommentModule {}
