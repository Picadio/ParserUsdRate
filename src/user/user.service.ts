import { Inject, Injectable } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { Repository } from "typeorm";
import { User } from "../database/entities/user.entity";
import { SubscribeDto } from "./dto/subscribe.dto";

@Injectable()
export class UserService {
  constructor(
    @Inject("USER_REPOSITORY")
    private readonly userRepository: Repository<User>,
  ) {}
  async create(subscribeDto: SubscribeDto) {
    const user = plainToInstance(User, subscribeDto);

    return await this.userRepository.save(user);
  }

  async getAll() {
    return await this.userRepository.find();
  }

  async findByEmail(email: string) {
    return await this.userRepository.findOneBy({email});
  }
}
