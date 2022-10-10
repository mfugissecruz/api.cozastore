const { Router } = require("express");
const homeRoutes = require("./home.routes");
const userRoutes = require("./user.routes");
const orderRoutes = require("./order.routes");
const productRoutes = require("./product.routes");
const sessionRoutes = require("./session.routes");
// const messageRouter = require("./sendMessage.routes");

const twilio = require("twilio");


const routes = Router();
routes.use("/", homeRoutes);
routes.use("/users", userRoutes);
routes.use("/orders", orderRoutes);
routes.use("/products", productRoutes);
routes.use("/session", sessionRoutes);
// routes.use("/message", messageRouter);

module.exports = routes;
