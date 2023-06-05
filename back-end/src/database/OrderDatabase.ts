import { Order } from "../Model/Order"
import { CustomError } from "../error/CustomError"
import { BaseDatabase } from "./Basedatabase"

export class OrderDatabase extends BaseDatabase {
  private static TABLE_ORDERS = "table_orders";
  private static PIZZAS_ORDER = "pizzas_order";

  public createOrder = async (order: Order) => {
    try {
      await OrderDatabase.connection
        .insert({
          nome_usuario: order.nameUser,
          observacao: order.obs
        })
        .into(OrderDatabase.TABLE_ORDERS)

      const [result] = await OrderDatabase.connection
        .select('id')
        .from(OrderDatabase.TABLE_ORDERS)
        .orderBy('id', 'desc')
        .limit(1);

      const orderId = result.id;
      return orderId
      
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }

  public createOrderPizza = async (orderId: number, pizzaName: string, quantity: number) => {
    try {
      await OrderDatabase.connection
        .insert({
          pedido_id: orderId,
          pizza: pizzaName,
          quantidade: quantity
        })
        .into(OrderDatabase.PIZZAS_ORDER);
        
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }

}
