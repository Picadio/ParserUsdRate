import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService } from './app.service';
import { ZodValidationPipe } from "nestjs-zod";
import { SubscribeDto, SubscribeDtoSchema } from "./user/dto/subscribe.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // api/rate
  @Get("rate")
  getRate(){
    return this.appService.getRate();
  }

  // api/subscribe
  @Post("subscribe")
  subscribe(@Body(new ZodValidationPipe(SubscribeDtoSchema)) subscribeDto: SubscribeDto){
    return this.appService.subscribe(subscribeDto);
  }

}
