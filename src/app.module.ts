import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MailModule } from "./mailer/mail.module";
import { TaskModule } from "./task/task.module";
import { RateModule } from "./rate/rate.module";


@Module({
  imports: [
    UserModule,
    MailModule,
    TaskModule,
    RateModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
