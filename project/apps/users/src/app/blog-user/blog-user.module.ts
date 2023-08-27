import { Module } from '@nestjs/common';
import { BlogUserMemoryRepository } from './blog-user-memory.repository';
import { BlogUserService } from './blog-user.service';
import { BlogUserController } from './blog-user.controller';
import { AuthenticationModule } from '../authentication/authentication.module.js';

@Module({
  imports: [AuthenticationModule],
  exports: [BlogUserMemoryRepository],
  providers: [BlogUserMemoryRepository, BlogUserService],
  controllers: [BlogUserController]
})
export class BlogUserModule {}
