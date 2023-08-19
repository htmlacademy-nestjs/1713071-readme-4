import { PostStatus, PostType } from '@project/shared/app-types';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class PostRdo {
  @ApiProperty({
    description: 'The unique id of the registered user',
    example: '12uN7'
  })
  @Expose()
  public userId: string;

  @ApiProperty({
    description: 'The type of content in the post',
    example: 'text'
  })
  @Expose()
  public type: PostType

  @ApiProperty({
    description: 'The stage of publication',
    example: 'published'
  })
  @Expose()
  public status: PostStatus

  @ApiProperty({
    description: 'Tags of post',
    example: 'Tag example'
  })
  @Expose()
  public tags?: string[];

}
