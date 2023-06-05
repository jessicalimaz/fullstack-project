import express from 'express'
import { PizzaController } from '../controller/PizzaController'

export const pizzaRouter = express.Router()
const pizzaController = new PizzaController()

pizzaRouter.get("/pizzas", pizzaController.getAllPizzas)