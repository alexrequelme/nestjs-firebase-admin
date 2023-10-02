import { Module } from '@nestjs/common';
import { ConfigurableModuleClass } from './firebase-admin.module-definition';
import { FirebaseAdminService } from './firebase-admin.service';
import { FirebaseAuthStrategy } from './firebase-auth.strategy';

@Module({
  providers: [FirebaseAdminService, FirebaseAuthStrategy],
})
export class FirebaseAdminModule extends ConfigurableModuleClass {}
