/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { SubscriberService } from "../subscriber.service";
import { SubscriberCreateInput } from "./SubscriberCreateInput";
import { Subscriber } from "./Subscriber";
import { SubscriberFindManyArgs } from "./SubscriberFindManyArgs";
import { SubscriberWhereUniqueInput } from "./SubscriberWhereUniqueInput";
import { SubscriberUpdateInput } from "./SubscriberUpdateInput";

export class SubscriberControllerBase {
  constructor(protected readonly service: SubscriberService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Subscriber })
  async createSubscriber(
    @common.Body() data: SubscriberCreateInput
  ): Promise<Subscriber> {
    return await this.service.createSubscriber({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Subscriber] })
  @ApiNestedQuery(SubscriberFindManyArgs)
  async subscribers(@common.Req() request: Request): Promise<Subscriber[]> {
    const args = plainToClass(SubscriberFindManyArgs, request.query);
    return this.service.subscribers({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Subscriber })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async subscriber(
    @common.Param() params: SubscriberWhereUniqueInput
  ): Promise<Subscriber | null> {
    const result = await this.service.subscriber({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Subscriber })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSubscriber(
    @common.Param() params: SubscriberWhereUniqueInput,
    @common.Body() data: SubscriberUpdateInput
  ): Promise<Subscriber | null> {
    try {
      return await this.service.updateSubscriber({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Subscriber })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSubscriber(
    @common.Param() params: SubscriberWhereUniqueInput
  ): Promise<Subscriber | null> {
    try {
      return await this.service.deleteSubscriber({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}