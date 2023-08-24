import { CRUDRepository } from '@project/util/util-types';
import { LikeEntity } from './like.entity.js';
import { ILike } from '@project/shared/app-types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LikeMemoryRepository implements CRUDRepository<LikeEntity, string, ILike> {
  private repository: Record<string, string[]> = {};

  public async create(item: LikeEntity): Promise<ILike> {
    const entry = { ...item.toObject() };
    const { postId, userId, } = entry;
    if (!this.repository[postId]) {
      this.repository[entry.postId] = [];
      this.repository[entry.postId].push(userId);
    }
    this.repository[entry.postId].push(userId);
    return entry;
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  public async update(postId: string, item: LikeEntity): Promise<ILike | void> {
    const entry = { ...item.toObject() };
    const { userId } = entry;
    const itHas = this.repository[postId].find((user: string) => user === userId)

    if (!itHas) {
      return this.create(item);
    }
    return this.delete(item);
  }

  public async delete(item: LikeEntity): Promise<void> {
    const entry = { ...item.toObject() };
    const { postId, userId } = entry;
    this.repository[postId].filter((userIdFromRepository: string) => userIdFromRepository !== userId);
  }
}
