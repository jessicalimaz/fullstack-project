
export interface Order {
    id: string,
    nameUser: string;
    obs?: string;
}

export interface OrderInput {
  nameUser: string;
  obs?: string;
}

export interface PizzaOrder {
    pizza: string;
    qty_pizza: number;
  }
  
export interface detailsOrder{
  id: string,
  name: string;
  quantity: number;
}