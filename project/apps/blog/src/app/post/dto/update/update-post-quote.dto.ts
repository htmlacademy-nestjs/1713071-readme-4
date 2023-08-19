import { UpdatePostDto } from './update-post.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePostQuoteDto extends UpdatePostDto {
  @ApiProperty({
    description: 'The text of the quote',
    example: 'Text example'
  })
  public text?: string;

  @ApiProperty({
    description: 'The name of the author to whom the quote belongs',
    example: 'The author\'s name, the author\'s surname'
  })
  public author?: string;
}
