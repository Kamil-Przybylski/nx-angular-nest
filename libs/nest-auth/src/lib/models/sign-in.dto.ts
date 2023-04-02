import { IsString, MinLength } from 'class-validator';
import { ISignInUser } from '@libs/nest-database';

export class AuthSingInDto implements ISignInUser {
  @IsString()
  @MinLength(6)
  email: string;

  @IsString()
  @MinLength(3)
  password: string;
}
