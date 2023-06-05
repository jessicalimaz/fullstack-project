import { app } from "./app";
import { pizzaRouter } from "./routes/PizzaRouter";

app.use("/api", pizzaRouter)