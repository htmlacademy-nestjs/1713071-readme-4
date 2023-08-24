import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { CommentService } from './comment.service.js';
import { ApiResponse } from '@nestjs/swagger';
import { fillObject } from '@project/util/util-core';
import { CreateCommentDto } from './dto/create-comment.dto.js';
import { CommentRdo } from './rdo/comment.rdo.js';

@Controller('comment')
export class CommentController {
  constructor(
    private readonly comment: CommentService
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new comment has been successfully created.'
  })
  @Post('create')
  public async create(@Body() dto: CreateCommentDto) {
    const comment = await this.comment.create(dto);
    return fillObject(CommentRdo, comment);
  }

  @Post(':id')
  public async up(@Body() dto: CreateCommentDto) {
    const comment = await this.comment.create(dto);
    return fillObject(CommentRdo, comment);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The new comment has been successfully created.'
  })
  @Post(':id')
  public async delete(@Body() dto: CreateCommentDto) {
    const comment = await this.comment.delete(dto);
    return fillObject(CommentRdo, comment);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Comments on the post have been received',
  })
  @Get(':id')
  public async getComment(@Param('id') id: string) {
    const comment = await this.comment.findOne(id);
    return fillObject(CommentRdo, comment)
  }
}
