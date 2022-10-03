const { Router } = require("express");
const homeRoutes = Router();
const HomeController = require("../controllers/HomeControllers");

const homeController = new HomeController();

homeRoutes.get("/", homeController.index);

module.exports = homeRoutes;
