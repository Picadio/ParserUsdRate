import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MailerModule } from "@nestjs-modules/mailer";
import { MailService } from "./mail.service";
@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        transport: {
          service: "gmail",
          host: configService.get("NODEMAILER_HOST"),
          port: configService.get("NODEMAILER_PORT"),
          secure: true,
          auth: {
            user: configService.get("NODEMAILER_EMAIL"),
            pass: configService.get("NODEMAILER_PASSWORD"),
          },
        },
      }),
    }),
  ],
  providers: [MailService],
  exports: [MailService]
})
export class MailModule{}