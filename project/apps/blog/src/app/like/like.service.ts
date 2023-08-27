import { Injectable } from '@nestjs/common';
import { LikeEntity } from './like.entity.js';
import { LikeMemoryRepository } from './like-memory.repository.js';
import { CreateLikeDto } from './dto/create-like.dto.js';
import { DeleteLikeDto } from './dto/delete-like.dto.js';

@Injectable()
export class LikeService {
  constructor(
    private readonly likeRepository: LikeMemoryRepository
  ) {}

  public async create(dto: CreateLikeDto) {
    const likeEntity = new LikeEntity(dto);
    return this.likeRepository.create(likeEntity);
  }

  public async delete(dto: DeleteLikeDto) {
    const likeEntity = new LikeEntity(dto);
    return this.likeRepository.delete(likeEntity);
  }
}
