import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { homeService } from './homeService';


@Controller('home')
export class HomeController {
  constructor(private readonly homeService: homeService) {}

  @Post('/')
  calculate(@Body() body: { T: number; Q: number; school: number }): Promise<any> {
    const { T, Q, school,  } = body;
    return this.homeService.calculateEligibility(T, Q, school);
  }

  @Get('/')
  search(@Query('UniversityName') UniversityName: string): Promise<any> {
    return this.homeService.searchForUniversities(UniversityName);
  }
}
