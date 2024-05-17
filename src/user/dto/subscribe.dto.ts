import * as z from "zod";
export class SubscribeDto{
  email: string
}

export const SubscribeDtoSchema = z.object({
  email: z.string().email()
}).required();