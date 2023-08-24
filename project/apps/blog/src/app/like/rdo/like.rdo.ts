import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class LikeRdo {
  @ApiProperty({
    description: 'The unique ID of the user',
    example: '12uN7'
  })
  @Expose()
  public userId: string;

  @ApiProperty({
    description: 'The unique ID of the post',
    example: '12uN7'
  })
  @Expose()
  public postId: string
}
