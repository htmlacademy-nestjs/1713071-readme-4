import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CommentRdo {
  @ApiProperty({
    description: 'The unique ID of the comment',
    example: '12uN7'
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: 'The text content of the comment',
    example: 'Text example'
  })
  @Expose()
  public text: string;

  @ApiProperty({
    description: 'The date the comment was created',
    example: 'Date example'
  })
  @Expose()
  public creationDate: string;
}
