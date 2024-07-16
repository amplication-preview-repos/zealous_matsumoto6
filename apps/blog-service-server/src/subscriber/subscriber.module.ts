import { Module } from "@nestjs/common";
import { SubscriberModuleBase } from "./base/subscriber.module.base";
import { SubscriberService } from "./subscriber.service";
import { SubscriberController } from "./subscriber.controller";
import { SubscriberResolver } from "./subscriber.resolver";

@Module({
  imports: [SubscriberModuleBase],
  controllers: [SubscriberController],
  providers: [SubscriberService, SubscriberResolver],
  exports: [SubscriberService],
})
export class SubscriberModule {}
