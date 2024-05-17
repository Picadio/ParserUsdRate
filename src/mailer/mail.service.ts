import { Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class MailService {

  constructor(private readonly mailerService: MailerService,
              private readonly configService: ConfigService,) {
  }

  async sendMail(to: string, subject: string, text: string) {
    const mailOptions = {
      from: this.configService.get("NODEMAILER_EMAIL"),
      to,
      subject,
      text,
    };

    return this.mailerService.sendMail(mailOptions);
  }
}