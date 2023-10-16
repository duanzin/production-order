export type OrderParams = {
    id: number;
    product: string;
    quantity: number;
    deliveryDate: string;
    status: "inactive" | "in production" | "completed";
  };
  
  export type CreateOrderParams = Omit<OrderParams, "id" | "status">;