import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthSingUpDto } from '../models/sign-up.dto';
import { AuthSingInDto } from '../models/sign-in.dto';
import { AuthGuard } from '@nestjs/passport';
import { IUser } from '@libs/nest-database';
import { GetUser } from '../jwt/get-user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('sign-up')
  signUp(@Body() signUpDto: AuthSingUpDto) {
    return this.authService.signUp(signUpDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('sign-in')
  signIn(@Body() signInDto: AuthSingInDto) {
    return this.authService.signIn(signInDto);
  }

  @UseGuards(AuthGuard())
  @Get('profile')
  getProfile(@GetUser() user: IUser) {
    return user;
  }
}
