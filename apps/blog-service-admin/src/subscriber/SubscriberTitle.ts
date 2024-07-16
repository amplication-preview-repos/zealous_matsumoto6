import { Subscriber as TSubscriber } from "../api/subscriber/Subscriber";

export const SUBSCRIBER_TITLE_FIELD = "id";

export const SubscriberTitle = (record: TSubscriber): string => {
  return record.id?.toString() || String(record.id);
};
