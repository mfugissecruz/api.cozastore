const { Router } = require("express");
const ProductsController = require("../controllers/ProductsController");
const productsRoutes = Router();

const productsController = new ProductsController();

productsRoutes.get("/", productsController.index);
productsRoutes.get("/:slug", productsController.show);
productsRoutes.get("/:slug/p", productsController.findbyColor);

module.exports = productsRoutes;
