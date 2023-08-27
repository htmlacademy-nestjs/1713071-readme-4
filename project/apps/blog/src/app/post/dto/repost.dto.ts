import { ApiProperty } from '@nestjs/swagger';

export class RepostDto {
  @ApiProperty({
    description: 'A unique ID of the post',
    example: '12uN7'
  })
  public id: string;

  @ApiProperty({
    description: 'A unique ID of the user',
    example: '12uN7'
  })
  public userId: string;
}
