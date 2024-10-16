import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { homeService } from './home.service';

@Controller('home')
export class homeController {
  constructor(private readonly homeService: homeService) {}

  @Post()
  calculate(@Body() body: { T: number; Q: number; school: number, UniversityName: string }): Promise<any> {
    const { T, Q, school, UniversityName } = body;
    return this.homeService.calculateEligibility(T, Q, school, UniversityName);
  }

  @Get()
  search(@Query( 'UniversityName' ) UniversityName: string ): Promise<any> {
    return this.homeService.searchForUniversities(UniversityName);
  }
}