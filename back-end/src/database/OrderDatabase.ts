import { Order } from "../Model/Order"
import { BaseDatabase } from "./Basedatabase"

export class OrderDatabase extends BaseDatabase{
    private static ORDER_TABLE = "orders"

    public createOrder = async (order:Order) =>{
        try{
            
        }catch(error:any){
           

        }
    }
}