import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SettingsModule } from './settings/settings.module';
import { UsersModule } from './modules/users/users.module';
import { StorageModule } from './modules/storage/storage.module';

@Module({
  imports: [SettingsModule, UsersModule, StorageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
