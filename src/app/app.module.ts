import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CfyModule } from '../cfy/cfy.module';
import { CfyController } from '../cfy/cfy.controllers';
import { CfyService } from '../cfy/cfy.service';
import { homeModule } from '../home/homeModule';
import { HomeController } from '../home/homeController';
import { homeService } from '../home/homeService';

@Module({
  imports: [CfyModule, homeModule],
  controllers: [CfyController, HomeController],
  providers: [CfyService, homeService],
})
export class AppModule {}



//#264653