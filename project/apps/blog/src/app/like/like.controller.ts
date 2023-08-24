import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { LikeService } from './like.service.js';
import { ApiResponse } from '@nestjs/swagger';
import { fillObject } from '@project/util/util-core';
import { LikeRdo } from './rdo/like.rdo.js';
import { UpdateLikeDto } from './dto/update-like.dto.js';

@Controller('like')
export class LikeController {
  constructor(
    private readonly like: LikeService
  ) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The new comment has been successfully created.'
  })
  @Post(':id')
  public async update(@Body() dto: UpdateLikeDto) {
    const like = await this.like.update(dto);
    return fillObject(LikeRdo, like);
  }
}
