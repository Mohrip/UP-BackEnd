import { Module } from '@nestjs/common';
import { homeService } from './homeService';
import { HomeController } from './homeController';

@Module({
  controllers: [HomeController],
  providers: [homeService],
})
export class homeModule {}