import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { DatabaseModule } from "../database/database.module";
import { ConfigModule } from "@nestjs/config";
import { userProviders } from "./user.provider";

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath: [".env"],
      isGlobal: true,
    }),
  ],
  providers: [UserService, ...userProviders],
  exports: [UserService]

})
export class UserModule {}
