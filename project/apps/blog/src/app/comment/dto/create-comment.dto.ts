import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @ApiProperty({
    description: 'A unique id of the comment',
    example: '12uN7'
  })
  public id: string;

  @ApiProperty({
    description: 'A unique id of the user',
    example: '12uN7'
  })
  public userId: string;

  @ApiProperty({
    description: 'A unique id of the post',
    example: '12uN7'
  })
  public postId: string;

  @ApiProperty({
    description: 'The text content of the comment',
    example: 'Text example'
  })
  public text: string;
}
