import { Module } from '@nestjs/common';
import { UploadModule } from './upload/upload.module';
import { ConfigModule } from '@nestjs/config';
import uploadConfig from './config/upload.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load:[
        uploadConfig
      ]
    }),
    UploadModule]
})
export class AppModule {}
