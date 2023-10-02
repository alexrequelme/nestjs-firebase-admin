import { SetMetadata } from '@nestjs/common';
import { SKIP_FIREBASE_AUTH } from './constants';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const SkipFirebaseAuth = () => SetMetadata(SKIP_FIREBASE_AUTH, true);

export const User = createParamDecorator((data: string, ctx: ExecutionContext) => {
  const { user } = ctx.switchToHttp().getRequest();
  return data ? user?.[data] : user;
});
