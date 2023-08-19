import { UpdatePostDto } from './update-post.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePostVideoDto extends UpdatePostDto {
  @ApiProperty({
    description: 'The title of the post',
    example: 'Title example'
  })
  public title?: string;

  @ApiProperty({
    description: 'Link to the video resource',
    example: 'https://video-example.com'
  })
  public url?: string;
}
