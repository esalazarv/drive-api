import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SettingsModule } from './settings/settings.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [SettingsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
