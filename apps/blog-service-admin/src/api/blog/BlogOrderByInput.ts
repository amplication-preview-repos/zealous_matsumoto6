import { SortOrder } from "../../util/SortOrder";

export type BlogOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
};
