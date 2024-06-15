import { Product } from "./product.model";

export interface PaginatedResponse {
    first: number;
    prev: number | null;
    next: number | null;
    last: number;
    pages: number;
    items: number;
    data: Product[];
  }