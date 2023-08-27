import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { BlogUserMemoryRepository } from '../blog-user/blog-user-memory.repository.js';
import { BlogUserEntity } from '../blog-user/blog-user.entity.js';
import { LoginUserDto } from './dto/login-user.dto.js';
import { USER_NOT_FOUND, USER_PASSWORD_WRONG } from './authentication.error.js';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly blogUserRepository: BlogUserMemoryRepository
  ) {}

  public async verifyUser(dto: LoginUserDto) {
    const { email, password } = dto;
    const existUser = await this.blogUserRepository.findByEmail(email);

    if (!existUser) {
     throw new NotFoundException(USER_NOT_FOUND);
    }
    const blogUserEntity = new BlogUserEntity(existUser);
    if (!await blogUserEntity.comparePassword(password)) {
      throw new UnauthorizedException(USER_PASSWORD_WRONG);
    }
    return blogUserEntity.toObject();
  }
}
