import { Injectable, NotFoundException } from '@nestjs/common';
import { PostMemoryRepository } from './post-memory.repository';
import { TCreateBlogPostDto } from './dto/create/create-blog-post-dto.type';
import dayjs from 'dayjs';
import { PostStatus } from '@project/shared/app-types';
import { PostBlogEntityHashTable } from './entity/post-blog-entity-hash-table';
import { TUpdateBlogPostDto } from './dto/update/update-blog-post-dto.type';

@Injectable()
export class PostService {
  constructor(
    private readonly postRepository: PostMemoryRepository
  ) {}

  public async create(dto: TCreateBlogPostDto) {
    const post = {
      ...dto,
      status: PostStatus.Published,
      createdDate: dayjs().toISOString(),
      postedDate: dayjs().toISOString(),
      isReposted: false,
      commentsCount: 0,
      likesCount: 0
    };

    const postEntity = await new PostBlogEntityHashTable[dto.type](post);
    return this.postRepository.create(postEntity);
  }

  public async update(postId: string, dto: TUpdateBlogPostDto) {
    const post = await this.findById(postId);

    if (!post) {
      throw new NotFoundException('Post is not found!');
    }
    const updatedPost = { ...post, ...dto };
    const postEntity = await new PostBlogEntityHashTable[dto.type](updatedPost);
    return this.postRepository.update(postId, postEntity);
  }

  public async repost(postId: string, userId: string) {
    return this.postRepository.repost(postId, userId);
  }

  public async remove(postId: string) {
    return this.postRepository.destroy(postId);
  }

  public async findById(postId: string) {
    const post = await this.postRepository.findById(postId);
    if (!post) {
      throw new NotFoundException('Post is not found!');
    }
    return post;
  }

  public async findAll() {
    return this.postRepository.findAll();
  }
}
