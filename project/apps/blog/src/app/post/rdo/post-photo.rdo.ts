import { PostRdo } from './post.rdo';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class PostPhotoRdo extends PostRdo {
  @ApiProperty({
    description: 'File-a photo uploaded by a registered user',
    example: 'photo.jpg'
  })
  @Expose()
  public photo: string;
}
