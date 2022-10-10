const { Router } = require('express');
// const ensureAuthenticated = require('../middleware/ensureAuthenticated');
const OrdersControllers = require('../controllers/OrdersControllers');
const ordersControllers = new OrdersControllers;
const orderRoutes = Router();

orderRoutes.get('/', /*ensureAuthenticated,*/ ordersControllers.index);
orderRoutes.post('/', ordersControllers.store);

module.exports = orderRoutes;