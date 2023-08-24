import { Injectable } from '@nestjs/common';
import { LikeMemoryRepository } from './like-memory.repository.js';
import { UpdateLikeDto } from './dto/update-like.dto.js';
import { LikeEntity } from './like.entity.js';

@Injectable()
export class LikeService {
  constructor(
    private readonly likeRepository: LikeMemoryRepository
  ) {}

  public async update(dto: UpdateLikeDto) {
    const likeEntity = new LikeEntity(dto);
    return this.likeRepository.update(dto.postId, likeEntity);
  }
}
