import { Body, Controller, Post, Patch, Param, Delete, HttpStatus, Get } from '@nestjs/common';
import { PostService } from './post.service.js';
import { fillObject } from '@project/util/util-core';
import { ApiResponse } from '@nestjs/swagger';
import { PostRdo } from './rdo/post.rdo.js';
import { CreatePostDto } from './dto/create/create-post.dto.js';

@Controller('posts')
export class PostController {
  constructor(
    private readonly postService: PostService
  ) {}

  @ApiResponse({
    type: PostRdo,
    status: HttpStatus.CREATED,
    description: 'The post has been created successfully!',
  })
  @Post('add')
  public async create(@Body() dto: CreatePostDto) {
    const post = await this.postService.create(dto);
    return fillObject(PostRdo, post)
  }

  @ApiResponse({
    type: PostRdo,
    status: HttpStatus.CREATED,
    description: 'The post has been reposted',
  })
  @Post('repost')
  public async repost(@Param('id') id: string, @Param('id') userId: string,) {
    const post = await this.postService.repost(id, userId);
    return fillObject(PostRdo, post)
  }

  @ApiResponse({
    type: PostRdo,
    status: HttpStatus.CREATED,
    description: 'The post has been updated',
  })
  @Patch(':id')
  public async update(@Param('id') id: string, @Body() dto: CreatePostDto) {
    const post = await this.postService.update(id, dto);
    return fillObject(PostRdo, post);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The post has been deleted',
  })
  @Delete(':id')
  public async delete(@Param('id') id: string) {
    return await this.postService.remove(id);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The post has been received',
  })
  @Get(':id')
  public async getPost(@Param('id') id: string) {
    const post = await this.postService.findById(id);
    return fillObject(PostRdo, post)
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The list of posts has been received',
  })
  @Get('/')
  public async getAllPosts() {
    const posts = await this.postService.findAll();
    return posts.map((post: PostRdo) => fillObject(PostRdo, post));
  }
}
