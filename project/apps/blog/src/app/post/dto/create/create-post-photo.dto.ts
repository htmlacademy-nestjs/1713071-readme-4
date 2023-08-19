import { CreatePostDto } from './create-post.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostPhotoDto extends CreatePostDto {
  @ApiProperty({
    description: 'File-a photo uploaded by a registered user',
    example: 'photo.jpg'
  })
  public photo: string;
}
