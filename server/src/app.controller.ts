import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { FieldResponseBody } from './types/FieldResponseBody';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
