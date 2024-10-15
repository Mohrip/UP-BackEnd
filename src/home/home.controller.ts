import { Controller, Post, Body } from '@nestjs/common';
import { homeService } from './home.service';

@Controller('home')
export class homeController {
  constructor(private readonly homeService: homeService) {}

  @Post()
  calculate(@Body() body: { T: number; Q: number; school: number }): string {
    const { T, Q, school } = body;
    return this.homeService.calculateEligibility(T, Q, school);
  }
}