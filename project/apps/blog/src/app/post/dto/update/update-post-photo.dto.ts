import { UpdatePostDto } from './update-post.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePostPhotoDto extends UpdatePostDto {
  @ApiProperty({
    description: 'File-a photo uploaded by a registered user',
    example: 'photo.jpg'
  })
  public photo?: string;
}
