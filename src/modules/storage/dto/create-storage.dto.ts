import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateStorageDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  public: boolean;
}
