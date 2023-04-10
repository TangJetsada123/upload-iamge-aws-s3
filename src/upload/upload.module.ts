import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:[MulterModule,ConfigModule],
  controllers: [UploadController],
  providers: [UploadService]
})
export class UploadModule {}
