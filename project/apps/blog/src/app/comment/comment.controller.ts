import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { CommentService } from './comment.service.js';
import { ApiResponse } from '@nestjs/swagger';
import { fillObject } from '@project/util/util-core';
import { CreateCommentDto } from './dto/create-comment.dto.js';
import { RemoveCommentDto } from './dto/remove-comment.dto.js';
import { CommentRdo } from './rdo/comment.rdo.js';
import { UpdateCommentDto } from './dto/update-comment.js';

@Controller('comments')
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

  @Patch('update/:id')
  public async update(@Body() dto: UpdateCommentDto) {
    const comment = await this.comment.create(dto);
    return fillObject(CommentRdo, comment);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The new comment has been successfully created.'
  })
  @Delete('delete/:id')
  public async delete(@Body() dto: RemoveCommentDto) {
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
