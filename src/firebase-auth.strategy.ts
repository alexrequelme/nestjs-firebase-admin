import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { getAuth } from 'firebase-admin/auth';
import { ExtractJwt, Strategy } from 'passport-firebase-jwt';

@Injectable()
export class FirebaseAuthStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({ jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken() });
  }

  async validate(idToken: string) {
    try {
      return await getAuth().verifyIdToken(idToken, true);
    } catch {
      throw new UnauthorizedException('Incorrect credentials');
    }
  }
}
