import { PostStatus, PostType } from '@project/shared/app-types';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({
    description: 'The unique id of the registered user',
    example: '12uN7'
  })
  public userId: string;

  @ApiProperty({
    description: 'The type of content in the post',
    example: 'text'
  })
  public type: PostType

  @ApiProperty({
    description: 'The stage of publication',
    example: 'published'
  })
  public status: PostStatus

  @ApiProperty({
    description: 'Tags of post',
    example: 'Tag example'
  })
  public tags?: string[];
}
