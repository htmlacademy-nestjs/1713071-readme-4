import { PostStatus, PostType } from '@project/shared/app-types';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class PostRdo {
  @ApiProperty({
    description: 'The title of the post',
    example: 'Title example'
  })
  @Expose()
  public title?: string;

  @ApiProperty({
    description: 'The announcement of post',
    example: 'Announcement description'
  })
  @Expose()
  public announcement?: string;

  @ApiProperty({
    description: 'Description the post',
    example: 'Example description'
  })
  @Expose()
  public description?: string;

  @ApiProperty({
    description: 'The text content of the post',
    example: 'Text example'
  })
  @Expose()
  public text?: string;

  @ApiProperty({
    description: 'Link to the resource',
    example: 'https://example.com'
  })
  @Expose()
  public url?: string;

  @ApiProperty({
    description: 'The name of the author to whom the quote belongs',
    example: 'The author\'s name, the author\'s surname'
  })
  @Expose()
  public author?: string;

  @ApiProperty({
    description: 'File-a photo uploaded by a registered user',
    example: 'photo.jpg'
  })
  @Expose()
  public photo?: string;

  @ApiProperty({
    description: 'Tags of post',
    example: 'Tag example'
  })
  @Expose()
  public tags?: string[];

  @ApiProperty({
    description: 'The type of content in the post',
    example: 'text'
  })
  @Expose()
  public type?: PostType;

  @ApiProperty({
    description: 'The stage of publication',
    example: 'published'
  })
  @Expose()
  public status?: PostStatus;
}
