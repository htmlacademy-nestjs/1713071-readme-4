import { ApiProperty } from '@nestjs/swagger';

export class RemoveCommentDto {
  @ApiProperty({
    description: 'A unique ID of the comment',
    example: '12uN7'
  })
  public id: string;

  @ApiProperty({
    description: 'A unique ID of the post',
    example: '12uN7'
  })
  public postId: string;
}
