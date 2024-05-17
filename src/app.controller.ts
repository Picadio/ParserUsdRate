import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService } from './app.service';
import { ZodValidationPipe } from "nestjs-zod";
import { SubscribeDto, SubscribeDtoSchema } from "./user/dto/subscribe.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("rate")
  getRate(){
    return this.appService.getRate();
  }
  @Post("subscribe")
  subscribe(@Body(new ZodValidationPipe(SubscribeDtoSchema)) subscribeDto: SubscribeDto){
    return this.appService.subscribe(subscribeDto);
  }

}
