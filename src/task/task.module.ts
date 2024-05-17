import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { MailModule } from "../mailer/mail.module";
import { TaskService } from "./task.service";
import { UserModule } from "../user/user.module";
import { RateModule } from "../rate/rate.module";

@Module({
  imports: [ScheduleModule.forRoot(), MailModule, UserModule, RateModule],
  providers: [TaskService],
})
export class TaskModule {}