import { CreatePostDto } from './create-post.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostLinkDto extends CreatePostDto {
  @ApiProperty({
    description: 'Link to the resource',
    example: 'https://example.com'
  })
  public url: string;

  @ApiProperty({
    description: 'Description attached to the link post',
    example: 'Example description'
  })
  public description?: string;
}
