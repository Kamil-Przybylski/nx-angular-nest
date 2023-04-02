import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IUser } from '@libs/nest-database';

export const GetUser = createParamDecorator(
  (data, ctx: ExecutionContext): IUser => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  }
);
