import { Controller, Post, Body } from '@nestjs/common';
import { CfyService } from './cfy.service';

@Controller('cfy')
export class CfyController {
  constructor(private readonly cfyService: CfyService) {}

  @Post()
  calculate(@Body() body: { T: number; Q: number; GPA: number }): string {
    const { T, Q, GPA } = body;
    return this.cfyService.calculateEligibility(T, Q, GPA);
  }
}