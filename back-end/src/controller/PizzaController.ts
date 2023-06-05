import { Request, Response } from "express";
import { PizzaBusiness } from "../business/PizzaBusiness";

const pizzaBusiness = new PizzaBusiness()

export class PizzaController {

    public getAllPizzas = async (req: Request, res: Response) =>{
        try{
            const pizzas = await pizzaBusiness.getAllPizzas()
        //console.log("controller")
            res.status(201).send({ pizzas });
            
        }catch(error:any){
            res.status(400).send(error.message);
        }
    }
}