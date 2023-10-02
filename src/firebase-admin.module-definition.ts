import { ConfigurableModuleBuilder } from '@nestjs/common';
import { FirebaseAdminModuleOptions } from './interfaces';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<FirebaseAdminModuleOptions>().setClassMethodName('forRoot').build();
