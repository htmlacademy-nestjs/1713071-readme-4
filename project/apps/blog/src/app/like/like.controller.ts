import { Body, Controller, HttpStatus, Post, Delete } from '@nestjs/common';
import { LikeService } from './like.service.js';
import { ApiResponse } from '@nestjs/swagger';
import { fillObject } from '@project/util/util-core';
import { LikeRdo } from './rdo/like.rdo.js';
import { CreateLikeDto } from './dto/create-like.dto.js';
import { DeleteLikeDto } from './dto/delete-like.dto.js';

@Controller('likes')
export class LikeController {
  constructor(
    private readonly like: LikeService
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The post has been added to your favorites.'
  })
  @Post('create')
  public async create(@Body() dto: CreateLikeDto) {
    const comment = await this.like.create(dto)
    return fillObject(LikeRdo, comment);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The post has been removed from your favorites.'
  })
  @Delete('delete/:id')
  public async delete(@Body() dto: DeleteLikeDto) {
    const comment = await this.like.delete(dto)
    return fillObject(LikeRdo, comment);
  }
}
