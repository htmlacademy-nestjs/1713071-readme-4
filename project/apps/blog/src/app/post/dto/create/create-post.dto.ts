import { PostStatus, PostType } from '@project/shared/app-types';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({
    description: 'A unique id for the post',
    example: '12uN7'
  })
  public id?: string;

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
    description: 'Description the post',
    example: 'Example description'
  })
  public description?: string;

  @ApiProperty({
    description: 'The text content of the post',
    example: 'Text example'
  })
  public text?: string;

  @ApiProperty({
    description: 'Link to the resource',
    example: 'https://example.com'
  })
  public url?: string;

  @ApiProperty({
    description: 'The name of the author to whom the quote belongs',
    example: 'The author\'s name, the author\'s surname'
  })
  public author?: string;

  @ApiProperty({
    description: 'File-a photo uploaded by a registered user',
    example: 'photo.jpg'
  })
  public photo?: string;

  @ApiProperty({
    description: 'Tags of post',
    example: 'Tag example'
  })
  public tags?: string[];

  @ApiProperty({
    description: 'The type of content in the post',
    example: 'text'
  })
  public type: PostType;

  @ApiProperty({
    description: 'The stage of publication',
    example: 'published'
  })
  public status: PostStatus;
}
