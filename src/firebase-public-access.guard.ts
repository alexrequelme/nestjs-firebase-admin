import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { SKIP_FIREBASE_AUTH } from './constants';

@Injectable()
export class FirebasePublicAccessGuard extends AuthGuard('firebase-jwt') {
  handleRequest(err: any, user: any, info: any, context: ExecutionContext, status?: any) {
    return user || null;
  }
}
