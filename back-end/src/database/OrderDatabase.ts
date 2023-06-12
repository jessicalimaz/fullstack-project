import { Order, detailsOrder } from "../Model/Order"
import { CustomError } from "../error/CustomError"
import { BaseDatabase } from "./Basedatabase"

export class OrderDatabase extends BaseDatabase {
  private static TABLE_ORDERS = "table_orders";
  private static PIZZAS_ORDER = "pizzas_order";

  public createOrder = async (order: Order) => {
    try {
      await OrderDatabase.connection
        .insert({
          id: order.id,
          nome_usuario: order.nameUser,
          observacao: order.obs
        })
        .into(OrderDatabase.TABLE_ORDERS)



    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }

  public createOrderPizza = async (order: any) => {
    try {

      await OrderDatabase.connection
        .insert({
          pedido_id: order.id,
          pizza: order.name,
          quantidade: order.quantity
        })
        .into(OrderDatabase.PIZZAS_ORDER);

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }

  public getAllOrders = async () => {
    try {
      const orders = await OrderDatabase.connection.raw(`
    
    SELECT table_orders.nome_usuario, table_orders.observacao, pizzas_order.pizza, pizzas_order.quantidade
    FROM table_orders JOIN pizzas_order ON table_orders.id = pizzas_order.pedido_id;

    `)

      return orders[0]

    } catch (error: any) {
      throw new CustomError(400, error.message)
    }
  }

  public getOrderDetails = async (id: string) => {
    try {
      const result = await OrderDatabase.connection.raw(`
        SELECT
        table_orders.nome_usuario,
        table_orders.observacao,
        pizzas_order.pizza,
        pizzas_order.quantidade
      FROM
        table_orders
      JOIN
        pizzas_order ON table_orders.id = pizzas_order.pedido_id
      WHERE
        table_orders.id = '${id}';
        `)

      return result[0]

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }
}
