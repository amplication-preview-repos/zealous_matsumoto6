import { SubscriberWhereInput } from "./SubscriberWhereInput";
import { SubscriberOrderByInput } from "./SubscriberOrderByInput";

export type SubscriberFindManyArgs = {
  where?: SubscriberWhereInput;
  orderBy?: Array<SubscriberOrderByInput>;
  skip?: number;
  take?: number;
};
