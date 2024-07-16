/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Subscriber as PrismaSubscriber } from "@prisma/client";

export class SubscriberServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SubscriberCountArgs, "select">
  ): Promise<number> {
    return this.prisma.subscriber.count(args);
  }

  async subscribers(
    args: Prisma.SubscriberFindManyArgs
  ): Promise<PrismaSubscriber[]> {
    return this.prisma.subscriber.findMany(args);
  }
  async subscriber(
    args: Prisma.SubscriberFindUniqueArgs
  ): Promise<PrismaSubscriber | null> {
    return this.prisma.subscriber.findUnique(args);
  }
  async createSubscriber(
    args: Prisma.SubscriberCreateArgs
  ): Promise<PrismaSubscriber> {
    return this.prisma.subscriber.create(args);
  }
  async updateSubscriber(
    args: Prisma.SubscriberUpdateArgs
  ): Promise<PrismaSubscriber> {
    return this.prisma.subscriber.update(args);
  }
  async deleteSubscriber(
    args: Prisma.SubscriberDeleteArgs
  ): Promise<PrismaSubscriber> {
    return this.prisma.subscriber.delete(args);
  }
}
