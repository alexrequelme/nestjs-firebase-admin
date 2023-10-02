import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { SKIP_FIREBASE_AUTH } from './constants';

@Injectable()
export class FirebaseAuthGuard extends AuthGuard('firebase-jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const targets = [context.getHandler(), context.getClass()];
    const skipAuth = this.reflector.getAllAndOverride<boolean>(SKIP_FIREBASE_AUTH, targets);

    return skipAuth || (super.canActivate(context) as Promise<boolean>);
  }
}
