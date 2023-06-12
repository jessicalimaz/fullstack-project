import express from 'express'
import { OrderController } from '../controller/OrderController'

export const orderRouter= express.Router()
const orderController = new OrderController()

orderRouter.post("/create-order", orderController.createOrder)
orderRouter.get("/orders", orderController.getAllOrders)
orderRouter.get("/orders/:id",orderController.getOrderDetails)