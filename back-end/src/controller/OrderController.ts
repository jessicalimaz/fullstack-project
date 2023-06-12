import { Request, Response } from "express";
import { OrderInput, PizzaOrder } from "../Model/Order"
import { OrderBusiness } from "../business/OrderBusiness";

const orderBusiness = new OrderBusiness()

export class OrderController {
    public createOrder = async (req: Request, res: Response) => {
        try {
            const input = {
                name: req.body.name,
                obs: req.body.obs
            }
            const pizzas: PizzaOrder[] = req.body.pizzas || []

            const order: OrderInput = {
                nameUser: input.name,
                obs: input.obs
            };

            await orderBusiness.createOrder(order, pizzas)
            res.status(201).send({ message: "Pedido confirmado!", order, pizzas })

        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }

    public getAllOrders = async (req: Request, res: Response) => {
        try {
            const orders = await orderBusiness.getAllOrders()
            res.status(201).send({ orders })

        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }

    public getOrderDetails = async(req: Request, res: Response)=>{
        try{
            const id = req.params.id
            const result = await orderBusiness.getOrderDetails(id)

            res.status(201).send({ result })

        }catch(error:any){
            res.status(400).send(error.message);

        }
    }
}