import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { MailService } from "../mailer/mail.service";
import { UserService } from "../user/user.service";
import { RateService } from "../rate/rate.service";


@Injectable()
export class TaskService {
  constructor(private readonly mailService: MailService,
              private readonly rateService: RateService,
              private readonly userService: UserService) {}

  @Cron(CronExpression.EVERY_DAY_AT_10AM)
  async handleCron() {
    const subject = 'Current Rate';
    const text = await this.rateService.getRate().catch((error) => {
      console.log("Rate api error when daily messages sending:", error);
    });
    if(!text) return;

    const users = await this.userService.getAll();

    for (const user of users) {
      await this.mailService.sendMail(user.email, subject, text);
    }

    console.log("Messages sent");
  }
}