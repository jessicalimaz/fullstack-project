import { PizzaDatabase } from "../database/PizzaDatabase"
import { CustomError } from "../error/CustomError"

const pizzaDatabase = new PizzaDatabase()

export class PizzaBusiness {
    public getAllPizzas = async()=>{
        try {
            const pizzas = await pizzaDatabase.getAllPizzas()
            return pizzas
            //console.log(pizzas)
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }
}