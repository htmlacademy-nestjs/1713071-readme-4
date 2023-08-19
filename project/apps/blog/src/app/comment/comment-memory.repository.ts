import { CRUDRepository } from '@project/util/util-types';
import { IComment } from '@project/shared/app-types';
import { CommentEntity } from './comment.entity';
import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';

@Injectable
export class CommentMemoryRepository implements CRUDRepository<CommentEntity, string, IComment>{
  private repository: Record<string, IComment> = {};

  public async create(item: CommentEntity): Promise<IComment> {
    const entry = { ...item.toObject(), id: randomUUID()};
    this.repository[entry.id] = entry;

    return entry;
  }

  // get 50 comments for post
  public async findById(id: string): Promise<IComment | null> {

  }

  // get next 50 comments for post
  public async getAll(): Promise<IComment | null> {

  }

  public async destroy(id: string): Promise<void> {

  }
}
