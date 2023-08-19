import { Body, Controller, Post, Patch, Param, Delete, HttpStatus, Get } from '@nestjs/common';
import { PostService } from './post.service';
import { TCreateBlogPostDto } from './dto/create/create-blog-post-dto.type';
import { fillObject } from '@project/util/util-core';
import { TBlogPostRdo } from './rdo/blog-post-rdo.type';
import { TUpdateBlogPostDto } from './dto/update/update-blog-post-dto.type';
import { ApiResponse } from '@nestjs/swagger';

@Controller('post')
export class PostController {
  constructor(
    private readonly postService: PostService
  ) {}

  @ApiResponse({
    // type: TBlogPostRdo,
    status: HttpStatus.CREATED,
    description: 'The post has been created successfully!',
  })
  @Post('add')
  public async create(@Body dto: TCreateBlogPostDto) {
    const post = await this.postService.create(dto);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return fillObject(TBlogPostRdo, post)
  }

  @ApiResponse({
    // type: TBlogPostRdo,
    status: HttpStatus.CREATED,
    description: 'The post has been reposted',
  })
  @Post('repost')
  public async repost(@Body dto: TCreateBlogPostDto) {
    const post = await this.postService.repost(dto);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return fillObject(TBlogPostRdo, post)
  }

  @ApiResponse({
    // type: TBlogPostRdo,
    status: HttpStatus.CREATED,
    description: 'The post has been updated',
  })
  @Patch(':id')
  public async update(@Param('id') id: string, @Body dto: TUpdateBlogPostDto) {
    const post = await this.postService.update(id, dto);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return fillObject(TBlogPostRdo, post);
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
    description: 'The post has been deleted',
  })
  @Get(':id')
  public async getPost(@Param('id') id: string) {
    const post = await this.postService.findById(id);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return fillObject(TBlogPostRdo, post)
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The post has been deleted',
  })
  @Get('/')
  public async getAllPosts(@Param('id') id: string) {
    const posts = await this.postService.findAll();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return posts.map((post: TBlogPostRdo) => fillObject(TBlogPostRdo, post));
  }
}
