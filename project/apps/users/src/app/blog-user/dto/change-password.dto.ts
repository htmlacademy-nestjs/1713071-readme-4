import { ApiProperty } from '@nestjs/swagger';

export class ChangePasswordDto {
  @ApiProperty({
    description: 'New user password',
    example: '791011',
  })
  public newPassword: string;

  @ApiProperty({
    description: 'Old user password',
    example: '123456'
  })
  public password: string;


  @ApiProperty({
    description: 'User uniq email',
    example: 'user@user.ru',
  })
  public email: string;
}
