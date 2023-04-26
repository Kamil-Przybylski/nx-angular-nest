import { Injectable, UnauthorizedException } from '@nestjs/common';
import { IUser, UsersService } from '@libs/nest-database';
import { JwtService } from '@nestjs/jwt';
import { AuthSingInDto } from '../models/sign-in.dto';
import { AuthSingUpDto } from '../models/sign-up.dto';
import { AccessToken } from '../models/auth.models';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signUp(signUpDto: AuthSingUpDto): Promise<IUser> {
    return this.usersService.signUp(signUpDto);
  }

  async signIn(signInDto: AuthSingInDto): Promise<AccessToken> {
    const user = await this.usersService.signIn(signInDto);
    if (!user) throw new UnauthorizedException();

    const accessToken = await this.jwtService.signAsync({
      email: user.email,
      sub: user.id,
    });
    return { accessToken };
  }

  async getUser(id: number) {
    return this.usersService.findOne({ id });
  }

  async getUsers() {
    return this.usersService.findMany();
  }
}
