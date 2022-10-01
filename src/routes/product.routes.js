const { Router } = require('express');
const ProdcutsController = require('../controllers/ProdcutsController');
const prdocutsRoutes = Router();

const prodcutsController = new ProdcutsController();

prdocutsRoutes.get('/', prodcutsController.index);
prdocutsRoutes.get('/', prodcutsController.show);


module.exports = userRoutes;