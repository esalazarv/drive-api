import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { S3 } from 'aws-sdk';
import { StorageService } from './storage.service';
import { StorageController } from './storage.controller';
import { Storage } from './entities/storage.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Storage])],
  controllers: [StorageController],
  providers: [
    StorageService,
    {
      provide: S3,
      useFactory: () =>
        new S3({
          endpoint: process.env.AWS_ENDPOINT,
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
          s3ForcePathStyle: true,
        }),
    },
  ],
  exports: [S3],
})
export class StorageModule {}
