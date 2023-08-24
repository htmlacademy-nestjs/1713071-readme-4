import { Injectable, NotFoundException } from '@nestjs/common';
import { PostMemoryRepository } from './post-memory.repository.js';
import { IPost, PostStatus } from '@project/shared/app-types';
import { CreatePostDto } from './dto/create/create-post.dto.js';
import { UpdatePostDto } from './dto/update/update-post.dto.js';
import { PostEntity } from './entity/post.entity.js';

@Injectable()
export class PostService {
  constructor(
    private readonly postRepository: PostMemoryRepository
  ) {}

  public async create(dto: CreatePostDto) {
    const post = {
      ...dto,
      status: PostStatus.Published,
      creationDate: new Date().toISOString(),
      publicationDate: new Date().toISOString(),
    };
    const postEntity = new PostEntity(post);
    return this.postRepository.create(postEntity);
  }

  public async update(postId: string, dto: UpdatePostDto) {
    const post = await this.findById(postId);

    if (!post) {
      throw new NotFoundException('Post is not found!');
    }
    const updatedPost = { ...post, ...dto };
    const postEntity = new PostEntity(updatedPost);
    return this.postRepository.update(postId, postEntity);
  }

  public async repost(id: string, userId: string): Promise<IPost | null> {
    const post = await this.findById(id);
    if (!post) {
      return null;
    }
    const reposted = {
      ...post,
      userId: userId,
      originId: id,
      originUserId: post.userId,
      isReposted: true
    };
    delete reposted.id;
    return this.create(reposted);
  }

  public async remove(postId: string) {
    return this.postRepository.delete(postId);
  }

  public async findById(postId: string) {
    const post = await this.postRepository.findOne(postId);
    if (!post) {
      throw new NotFoundException('Post is not found!');
    }
    return post;
  }

  public async findAll() {
    return this.postRepository.findMany();
  }
}
