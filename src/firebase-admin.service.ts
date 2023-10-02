import { Inject, Injectable } from '@nestjs/common';
import { FirebaseAdminModuleOptions } from './interfaces';
import { cert, initializeApp } from 'firebase-admin/app';
import { MODULE_OPTIONS_TOKEN } from './firebase-admin.module-definition';

@Injectable()
export class FirebaseAdminService {
  constructor(@Inject(MODULE_OPTIONS_TOKEN) private options: FirebaseAdminModuleOptions) {
    initializeApp({ credential: cert(this.options.credential) });
  }
}
