import { Order } from "../Model/Order";
import { OrderInputDTO } from "../Model/OrderInputDTO";
import { OrderDatabase } from "../database/OrderDatabase";
import { CustomError, InvalidBody } from "../error/CustomError";
import { IdGenerator } from "../services/IdGenerator";

const orderDatabase = new OrderDatabase()
const idGenerator = new IdGenerator()

export class OrderBusiness {
    public createOrder = async (input: OrderInputDTO) => {
        try {
            const { nameUser, obs, pizzas } = input;

            if (!nameUser || !pizzas || pizzas.length === 0) {
                throw new InvalidBody();
            }

            const id: string = idGenerator.generateId()

            const order: Order = {
                id: id,
                nameUser: nameUser,
                obs: obs,
                pizzas: [
                    { name: pizzas[0].name, quantity: pizzas[0].quantity }
                ]
            };
            
            const orderId = await orderDatabase.createOrder(order);

            for (const pizza of order.pizzas) {
                await orderDatabase.createOrderPizza(orderId, pizza.name, pizza.quantity);
            }

        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    }
}

