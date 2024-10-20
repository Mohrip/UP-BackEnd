import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { homeService } from './homeService';

@Controller('home')
export class HomeController {
  constructor(private readonly homeService: homeService) {}

  @Post('/')
  calculate( Body: { T: number; Q: number; school: number; UniversityName: string }): Promise<any> {
    const { T, Q, school, UniversityName } = Body;
    return this.homeService.calculateEligibility(T, Q, school, UniversityName);
  }

  @Get('/')
  search( Query: ('UniversityName'), UniversityName: string): Promise<any> {
    return this.homeService.searchForUniversities(UniversityName);
  }
}
