import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SubscriberService } from "./subscriber.service";
import { SubscriberControllerBase } from "./base/subscriber.controller.base";

@swagger.ApiTags("subscribers")
@common.Controller("subscribers")
export class SubscriberController extends SubscriberControllerBase {
  constructor(protected readonly service: SubscriberService) {
    super(service);
  }
}
