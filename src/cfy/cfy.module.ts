import { Module } from '@nestjs/common';
import { CfyService } from './cfy.service';
import { CfyController } from './cfy.controllers';

@Module({
  controllers: [CfyController],
  providers: [CfyService],
})
export class CfyModule {}