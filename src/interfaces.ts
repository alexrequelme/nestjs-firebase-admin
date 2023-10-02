import { ModuleMetadata } from '@nestjs/common';
import { ServiceAccount } from 'firebase-admin';

export interface FirebaseAdminModuleOptions {
  credential: ServiceAccount;
}
