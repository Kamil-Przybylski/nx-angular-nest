import { IsString, MinLength, MaxLength, IsEmail } from 'class-validator';
import { ISignUpUser } from '@libs/nest-database';

export class AuthSingUpDto implements ISignUpUser {
  @IsString()
  @MinLength(3)
  @MaxLength(30)
  username: string;

  @IsString()
  @MinLength(6)
  @MaxLength(100)
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(30)
  password: string;
}
