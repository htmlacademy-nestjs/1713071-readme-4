import { CRUDRepository } from '@project/util/util-types';
import { BlogUserEntity } from './blog-user.entity.js';
import { IUser } from '@project/shared/app-types';
import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogUserMemoryRepository implements CRUDRepository<BlogUserEntity, string, IUser> {
  private repository: Record<string, IUser> = {};

  public async create(item: BlogUserEntity): Promise<IUser> {
    const entry = { ...item.toObject(), id: randomUUID() };
    this.repository[entry.id] = entry;
    return entry;
  }

  public async update(id: string, item: BlogUserEntity): Promise<IUser> {
    this.repository[id] = { ...item.toObject(), id };
    return this.findOne(id);
  }

  public async findOne(id: string): Promise<IUser> {
    if (this.repository[id]) {
      return { ...this.repository[id] };
    }
    return null;
  }

  public async findByEmail(email: string): Promise<IUser | null> {
    const existUser = Object.values(this.repository)
      .find((userItem) => userItem.email === email);

    if (!existUser) {
      return null;
    }
    return { ...existUser };
  }

  public async delete(id: string): Promise<void> {
    delete this.repository[id];
  }
}
