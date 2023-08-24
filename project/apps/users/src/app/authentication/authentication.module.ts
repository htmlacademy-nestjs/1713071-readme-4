import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller.js';
import { AuthenticationService } from './authentication.service.js';
import { BlogUserModule } from '../blog-user/blog-user.module.js';

@Module({
  imports: [BlogUserModule],
  exports: [AuthenticationService],
  providers: [AuthenticationService],
  controllers: [AuthenticationController]
})
export class AuthenticationModule {}
