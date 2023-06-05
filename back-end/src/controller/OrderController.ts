import { Request, Response } from "express";
import { OrderInputDTO } from "../Model/OrderInputDTO"
import { OrderBusiness } from "../business/OrderBusiness";

const orderBusiness = new OrderBusiness()

export class OrderController {
    public createOrder = async (req: Request, res: Response) => {
        try {
            const input = {
                name: req.body.name,
                pizzas: [
                    {pizza: req.body.pizza, qty_pizza: req.body.qty_pizza},
                ],
                obs: req.body.obs
            }

            const order: OrderInputDTO = {
                nameUser: input.name,
                obs: input.obs,
                pizzas: input.pizzas.map((pizza: any) => ({
                    name: pizza.pizza,
                    quantity: pizza.qty_pizza
                }))
            };

            await orderBusiness.createOrder(order)
            console.log(input)
            res.status(201).send({message: "Pedido confirmado!"})

        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }
}