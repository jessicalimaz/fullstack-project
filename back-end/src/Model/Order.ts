export interface Order {
    id: string,
    nameUser: string;
    obs?: string;
    pizzas: PizzaOrder[];
  }
  
export interface PizzaOrder {
    name: string;
    quantity: number;
  }
  