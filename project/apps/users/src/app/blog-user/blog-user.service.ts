import dayjs from 'dayjs';
import { ConflictException, Injectable } from '@nestjs/common';
import { BlogUserMemoryRepository } from './blog-user-memory.repository.js';
import { CreateUserDto } from '../authentication/dto/create-user.dto.js';
import { AUTH_USER_EXISTS } from '../authentication/authentication.constant.js';
import { BlogUserEntity } from './blog-user.entity.js';
import { LoginUserDto } from '../authentication/dto/login-user.dto.js';
import { AuthenticationService } from '../authentication/authentication.service.js';

@Injectable()
export class BlogUserService {
  constructor(
    private readonly blogUserRepository: BlogUserMemoryRepository,
    private readonly authenticationService: AuthenticationService
  ) {}

  public async register(dto: CreateUserDto) {
    const { email, firstname, lastname, password, registrationDate } = dto;

    const blogUser = {
      email,
      firstname,
      lastname,
      avatar: '',
      registrationDate: dayjs(registrationDate).toDate(),
      passwordHash: ''
    };

    const existUser = await this.blogUserRepository.findByEmail(email);
    if (existUser) {
      throw new ConflictException(AUTH_USER_EXISTS);
    }
    const userEntity = await new BlogUserEntity(blogUser).setPassword(password)
    return this.blogUserRepository.create(userEntity);
  }

  public async changePassword(newPassword: string, dto: LoginUserDto) {
    const existUser = await this.authenticationService.verifyUser(dto);
    const updatedUser = await new BlogUserEntity(existUser).setPassword(newPassword);
    const { id } = updatedUser;
    return this.blogUserRepository.update(id, updatedUser);
  }

  public async getUser(id: string) {
    return this.blogUserRepository.findOne(id);
  }
}
