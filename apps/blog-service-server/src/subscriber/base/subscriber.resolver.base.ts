/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Subscriber } from "./Subscriber";
import { SubscriberCountArgs } from "./SubscriberCountArgs";
import { SubscriberFindManyArgs } from "./SubscriberFindManyArgs";
import { SubscriberFindUniqueArgs } from "./SubscriberFindUniqueArgs";
import { DeleteSubscriberArgs } from "./DeleteSubscriberArgs";
import { SubscriberService } from "../subscriber.service";
@graphql.Resolver(() => Subscriber)
export class SubscriberResolverBase {
  constructor(protected readonly service: SubscriberService) {}

  async _subscribersMeta(
    @graphql.Args() args: SubscriberCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Subscriber])
  async subscribers(
    @graphql.Args() args: SubscriberFindManyArgs
  ): Promise<Subscriber[]> {
    return this.service.subscribers(args);
  }

  @graphql.Query(() => Subscriber, { nullable: true })
  async subscriber(
    @graphql.Args() args: SubscriberFindUniqueArgs
  ): Promise<Subscriber | null> {
    const result = await this.service.subscriber(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Subscriber)
  async deleteSubscriber(
    @graphql.Args() args: DeleteSubscriberArgs
  ): Promise<Subscriber | null> {
    try {
      return await this.service.deleteSubscriber(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}