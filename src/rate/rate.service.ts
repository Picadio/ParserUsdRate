import { Injectable } from "@nestjs/common";
import * as process from "node:process";


@Injectable()
export class RateService{
  private RATE_API = process.env["RATE_API"];

  async getRate(){
    return fetch(this.RATE_API).then(async (response) => {
      let json = await response.json();
      const usdInfo = json.find(x => x["ccy"] === "USD");
      return usdInfo["buy"];
    });
  }
}