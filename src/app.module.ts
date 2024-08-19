import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileSchema } from '../schema/profile.schema';
import { ProfileService } from './profile/profile.service';
import { ProfileController } from './profile/profile.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', {
      dbName: 'youapp_db',
    }),
    MongooseModule.forFeature([{ name: 'Profile', schema: ProfileSchema }]),
  ],
  controllers: [AppController, ProfileController],
  providers: [AppService, ProfileService],
})
export class AppModule {}
