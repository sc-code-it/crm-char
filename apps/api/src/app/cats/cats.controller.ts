import { Controller, Get } from '@nestjs/common';
// import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This actions returns all of the cats'
  }
}
