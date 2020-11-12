import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInfo(): Record<string, any> {
    return {
      name: 'Feedma Drive Api!',
      version: '1.0.0',
    };
  }
}
