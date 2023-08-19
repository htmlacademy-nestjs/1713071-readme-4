import { PostRdo } from './post.rdo';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class PostQuoteRdo extends PostRdo {
  @ApiProperty({
    description: 'The text of the quote',
    example: 'Text example'
  })
  @Expose()
  public text: string;

  @ApiProperty({
    description: 'The name of the author to whom the quote belongs',
    example: 'The author\'s name, the author\'s surname'
  })
  @Expose()
  public author: string;
}
