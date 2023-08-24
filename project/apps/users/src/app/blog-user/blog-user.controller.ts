import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { BlogUserService } from './blog-user.service.js';
import { ApiResponse } from '@nestjs/swagger';
import { CreateUserDto } from '../authentication/dto/create-user.dto.js';
import { fillObject } from '@project/util/util-core';
import { UserRdo } from '../authentication/rdo/user.rdo.js';
import { LoginUserDto } from '../authentication/dto/login-user.dto.js';

@Controller('blog-user')
export class BlogUserController {
  constructor(
    private readonly blogUser: BlogUserService
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new user has been successfully created.'
  })
  @Post('register')
  public async create(@Body() dto: CreateUserDto) {
    const newUser = await this.blogUser.register(dto);
    return fillObject(UserRdo, newUser);
  }

  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.OK,
    description: 'User found'
  })
  @Get(':id')
  public async getUser(@Param('id') id: string) {
    const existUser = await this.blogUser.getUser(id);
    return fillObject(UserRdo, existUser);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The password successfully changed.'
  })
  @Post('change-password')
  public async changePassword(@Param('newPassword') newPassword: string, @Body() dto: LoginUserDto) {
    const userWithUpdatedPassword = await this.blogUser.changePassword(newPassword, dto);
    return fillObject(UserRdo, userWithUpdatedPassword);
  }
}
