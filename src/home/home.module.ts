import { Module } from '@nestjs/common';
import { homeService } from './home.service';
import { homeController } from './home.controller';

@Module({
  controllers: [homeController],
  providers: [homeService],
})
export class homeModule {}