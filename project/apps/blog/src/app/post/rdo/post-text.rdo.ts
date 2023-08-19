import { PostRdo } from './post.rdo';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class PostTextRdo extends PostRdo {
  @ApiProperty({
    description: 'The title of the post',
    example: 'Title example'
  })
  @Expose()
  public title: string;

  @ApiProperty({
    description: 'The announcement of post',
    example: 'Announcement description'
  })
  @Expose()
  public announcement: string;

  @ApiProperty({
    description: 'The text content of the post',
    example: 'Text example'
  })
  @Expose()
  public text: string;
}
