import { app } from "./app";
import { orderRouter } from "./routes/OrderRouter";
import { pizzaRouter } from "./routes/PizzaRouter";

app.use("/api", pizzaRouter)
app.use("/api", orderRouter)