import { PostRdo } from './post.rdo';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class PostVideoRdo extends PostRdo {
  @ApiProperty({
    description: 'The title of the post',
    example: 'Title example'
  })
  @Expose()
  public title: string;

  @ApiProperty

  @ApiProperty({
    description: 'Link to the video resource',
    example: 'https://video-example.com'
  })
  @Expose()
  public url: string;
}
