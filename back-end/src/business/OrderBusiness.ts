import { Order, OrderInput, PizzaOrder, detailsOrder } from "../Model/Order";
import { OrderDatabase } from "../database/OrderDatabase";
import { CustomError, InvalidBody } from "../error/CustomError";
import { IdGenerator } from "../services/IdGenerator";

const orderDatabase = new OrderDatabase()
const idGenerator = new IdGenerator()

export class OrderBusiness {
    public createOrder = async (input: OrderInput, pizzas:PizzaOrder[]) => {
        try {
            const { nameUser, obs } = input;
            const orderDetails = pizzas

            if (!nameUser || orderDetails.length === 0) {
                throw new InvalidBody();
            }

            const id = idGenerator.generateId()

            const order: Order = {
                id: id,
                nameUser: nameUser,
                obs: obs,
            };
           
            await orderDatabase.createOrder(order);

            await orderDetails.forEach(async order =>{
                const pizzaOrder ={
                    id: id,
                    name: order.pizza,
                    quantity: order.qty_pizza
                }
                await orderDatabase.createOrderPizza(pizzaOrder)
            })

        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    }

    public getAllOrders = async () =>{
        try{
            const orders = await orderDatabase.getAllOrders()
            return orders

        }catch(error:any){
            throw new CustomError(400, error.message)

        }
    }

    public getOrderDetails = async(idUser:string)=>{
        try{
            const id = idUser
            const result = await orderDatabase.getOrderDetails(id)
            return result

        }catch(error:any){
            throw new CustomError(400, error.message);
        }
    }
}

