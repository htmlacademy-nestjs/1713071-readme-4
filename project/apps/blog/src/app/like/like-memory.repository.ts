import { CRUDRepository } from '@project/util/util-types';
import { LikeEntity } from './like.entity';
import { ILike } from '@project/shared/app-types';
import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';

@Injectable
export class LikeMemoryRepository implements CRUDRepository<LikeEntity, string, ILike>{
  private repository: Record<string, ILike> = {};

 public async create(item: LikeEntity): Promise<ILike> {
   const entry = { ...item.toObject(), id: randomUUID()};
   this.repository[entry.id] = entry;

   return entry;
 }

  public async destroy(id: string): Promise<void> {

  }
}
