import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { S3 } from 'aws-sdk';
import { Storage } from '../entities/storage.entity';

@Injectable()
@EventSubscriber()
export class StorageSubscriber implements EntitySubscriberInterface<Storage> {
  constructor(
    @InjectConnection() readonly connection: Connection,
    @Inject(S3) private s3: S3,
  ) {
    connection.subscribers.push(this);
  }

  /**
   * Indicates that this subscriber only listen to Storage events.
   */
  listenTo() {
    return Storage;
  }

  /**
   * Called before storage insertion.
   */
  async afterInsert(event: InsertEvent<Storage>) {
    await this.s3.createBucket({ Bucket: event.entity.id }).promise();
  }
}
