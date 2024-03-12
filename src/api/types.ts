

export type ApiResponse<T> = {
  result: T;
};


export type ItemsPayload = {
  ids: string[];
};

export type ProductModel = {
  brand: string | null;
  id: string;
  price: number;
  product: string;
};



export type ApiPayload ={
  result: {
      action: "filter"
      params: {
        price?: number;
        brand?: string;
        product?: string;
      };
    }
  | {
      action: "get_ids";
      params: {
        offset: number;
        limit: number;
      };
    },
    signal: AbortSignal
}


export enum Actions {
  IDS = "get_ids",
  ITEMS= "get_items",
  FILTER= "filter",
}



 