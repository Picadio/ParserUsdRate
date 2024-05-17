import { HttpException, Injectable } from "@nestjs/common";

import { SubscribeDto } from "./user/dto/subscribe.dto";
import { UserService } from "./user/user.service";
import { RateService } from "./rate/rate.service";

@Injectable()
export class AppService {

  constructor(private readonly userService: UserService,
              private readonly rateService: RateService) {
  }
  async getRate(){
    return this.rateService.getRate().catch((error) => {
      console.log("Error in request: ", error);
      throw new HttpException("Invalid status value", 400);
    });
  }

  async subscribe(subscribeDto: SubscribeDto){
    const user = await this.userService.findByEmail(subscribeDto.email);
    if(user){
      throw new HttpException("E-mail вже є в базі даних", 409)
    }
    await this.userService.create(subscribeDto);
    return "E-mail додано";
  }
}
