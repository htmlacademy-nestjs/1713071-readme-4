import { CRUDRepository } from '@project/util/util-types';
import { TPostBlog } from '@project/shared/app-types';
import { PostBlogEntity } from './entity/post-blog.entity';
import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';

@Injectable
export class PostMemoryRepository implements CRUDRepository<PostBlogEntity, string, TPostBlog> {
  private repository: Record<string, TPostBlog> = {};

  public async create(item: PostBlogEntity): Promise<TPostBlog> {
    const entry = { ...item.toObject(), id: randomUUID() };
    this.repository[entry.id] = entry as TPostBlog;
    return entry as TPostBlog;
  }

  public async update(id: string, item: PostBlogEntity): Promise<TPostBlog> {
    this.repository[id] = { ...item.toObject(), id: id } as TPostBlog;
    return this.findById(id);
  }

  public async repost(id: string, userId: string): Promise<TPostBlog> {
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

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.create(reposted);
  }

  public async destroy(id: string): Promise<void> {
    delete this.repository[id];
  }

  public async findById(id: string): Promise<TPostBlog | null> {
    if (this.repository[id]) {
      return { ...this.repository[id] } as TPostBlog;
    }
    return null;
  }

  public async findAll(): Promise<TPostBlog[]> {
    const existPost = Object.values(this.repository)

    if (!existPost) {
      return null;
    }
    return [...existPost];
  }
}
