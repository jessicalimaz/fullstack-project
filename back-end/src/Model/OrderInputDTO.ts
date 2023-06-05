export interface OrderInputDTO {
    nameUser: string;
    obs?: string;
    pizzas: PizzaOrder[];
  }
  
export interface PizzaOrder {
    name: string;
    quantity: number;
  }
  