import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubscriberServiceBase } from "./base/subscriber.service.base";

@Injectable()
export class SubscriberService extends SubscriberServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
