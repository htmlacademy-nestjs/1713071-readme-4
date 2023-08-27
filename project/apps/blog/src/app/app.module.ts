import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module.js';
import { CommentModule } from './comment/comment.module.js';
import { LikeModule } from './like/like.module.js';

@Module({
  imports: [PostModule, CommentModule, LikeModule]
})
export class AppModule {}
