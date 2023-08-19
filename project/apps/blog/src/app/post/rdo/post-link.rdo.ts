import { PostRdo } from './post.rdo';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class PostLinkRdo extends PostRdo {
  @ApiProperty({
    description: 'Link to the resource',
    example: 'https://example.com'
  })
  @Expose()
  public url: string;

  @ApiProperty({
    description: 'Description attached to the link post',
    example: 'Example description'
  })
  @Expose()
  public description?: string;
}
