import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { RateService } from "./rate.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env"],
      isGlobal: true,
    }),
  ],
  providers: [RateService],
  exports: [RateService]
})
export class RateModule{}