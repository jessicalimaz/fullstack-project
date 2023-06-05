import { CustomError } from "../error/CustomError"
import { BaseDatabase } from "./Basedatabase"

export class PizzaDatabase extends BaseDatabase{
    private static PIZZA_TABLE = "table_pizzas"

    public getAllPizzas = async()=>{
        try{
            const pizzas = await PizzaDatabase.connection
                .select("*")
                .from(PizzaDatabase.PIZZA_TABLE)

            return pizzas
        }catch(error:any){
            throw new CustomError(400, error.message)

        }
    }
}