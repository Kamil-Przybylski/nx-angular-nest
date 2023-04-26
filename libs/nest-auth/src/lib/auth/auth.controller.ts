import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
  Get,
  UseInterceptors,
  ClassSerializerInterceptor,
  Param,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthSingUpDto } from '../models/sign-up.dto';
import { AuthSingInDto } from '../models/sign-in.dto';
import { AuthGuard } from '@nestjs/passport';
import { IUser } from '@libs/nest-database';
import { GetUser } from '../jwt/get-user.decorator';
import { UserResponseDto } from '../models/auth.dto';

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
  getProfile(@GetUser() user: IUser): UserResponseDto {
    return new UserResponseDto(user);
  }

  @Get('user/:id')
  @UseInterceptors(ClassSerializerInterceptor)
  async getUser(@Param('id') id: number): Promise<UserResponseDto> {
    const user = await this.authService.getUser(id);
    return new UserResponseDto(user);
  }

  @Get('users')
  @UseInterceptors(ClassSerializerInterceptor)
  async getUsers(): Promise<UserResponseDto[]> {
    const users = await this.authService.getUsers();
    return users.map((user) => new UserResponseDto(user));
  }
}
