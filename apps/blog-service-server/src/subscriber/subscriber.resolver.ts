import * as graphql from "@nestjs/graphql";
import { SubscriberResolverBase } from "./base/subscriber.resolver.base";
import { Subscriber } from "./base/Subscriber";
import { SubscriberService } from "./subscriber.service";

@graphql.Resolver(() => Subscriber)
export class SubscriberResolver extends SubscriberResolverBase {
  constructor(protected readonly service: SubscriberService) {
    super(service);
  }
}
