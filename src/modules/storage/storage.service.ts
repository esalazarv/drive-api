import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStorageDto } from './dto/create-storage.dto';
import { UpdateStorageDto } from './dto/update-storage.dto';
import { Storage } from './entities/storage.entity';

@Injectable()
export class StorageService {
  constructor(
    @InjectRepository(Storage) private storageRepository: Repository<Storage>,
  ) {}

  async create(createStorageDto: CreateStorageDto) {
    const bucket = this.storageRepository.create(createStorageDto);
    return this.storageRepository.save(bucket);
  }

  findAll() {
    return this.storageRepository.find();
  }

  findOne(id: string) {
    return this.storageRepository.findOne(id);
  }

  async update(id: string, updateStorageDto: UpdateStorageDto) {
    const storage = await this.storageRepository.findOne(id);
    return this.storageRepository.save({ ...storage, ...updateStorageDto });
  }

  remove(id: string) {
    return this.storageRepository.softDelete(id);
  }
}
