import { Module } from '@nestjs/common';
import { BlogUserModule } from './blog-user/blog-user.module.js';
import { AuthenticationModule } from './authentication/authentication.module.js';

@Module({
  imports: [AuthenticationModule, BlogUserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
