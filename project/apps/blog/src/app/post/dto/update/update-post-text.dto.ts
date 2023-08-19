import { UpdatePostDto } from './update-post.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePostTextDto extends UpdatePostDto {
  @ApiProperty({
    description: 'The title of the post',
    example: 'Title example'
  })
  public title?: string;

  @ApiProperty({
    description: 'The announcement of post',
    example: 'Announcement description'
  })
  public announcement?: string;

  @ApiProperty({
    description: 'The text content of the post',
    example: 'Text example'
  })
  public text?: string;
}
