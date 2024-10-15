import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CfyModule } from '../cfy/cfy.module';
import { CfyController } from '../cfy/cfy.controllers';
import { CfyService } from '../cfy/cfy.service';
import { homeModule } from 'src/home/home.module';
import { homeController } from 'src/home/home.controller';
import { homeService } from 'src/home/home.service';

@Module({
  imports: [CfyModule, homeModule],
  controllers: [CfyController, homeController],
  providers: [CfyService, homeService],
})
export class AppModule {}



//#264653