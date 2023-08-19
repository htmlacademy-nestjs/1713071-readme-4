import { CreatePostDto } from './create-post.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostTextDto extends CreatePostDto {
  @ApiProperty({
    description: 'The title of the post',
    example: 'Title example'
  })
  public title: string;

  @ApiProperty({
    description: 'The announcement of post',
    example: 'Announcement description'
  })
  public announcement: string;

  @ApiProperty({
    description: 'The text content of the post',
    example: 'Text example'
  })
  public text: string;
}
