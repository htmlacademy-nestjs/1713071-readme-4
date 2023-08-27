import { ApiProperty } from '@nestjs/swagger';

export class UpdateCommentDto {
  @ApiProperty({
    description: 'A unique ID of the comment',
    example: '12uN7'
  })
  public id: string;

  @ApiProperty({
    description: 'A unique ID of the user',
    example: '12uN7'
  })
  public userId: string;

  @ApiProperty({
    description: 'A unique ID of the post',
    example: '12uN7'
  })
  public postId: string;

  @ApiProperty({
    description: 'The text content of the comment',
    example: 'Text example'
  })
  public text: string;
}
