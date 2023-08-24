import { ApiProperty } from '@nestjs/swagger';

export class UpdateLikeDto {
  @ApiProperty({
    description: 'The unique ID of the user',
    example: '12uN7'
  })
  public userId: string;

  @ApiProperty({
    description: 'The unique ID of the post',
    example: '12uN7'
  })
  public postId: string
}
