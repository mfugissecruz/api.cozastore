const { Router } = require('express');
const ensureAuthenticated = require('../middleware/ensureAuthenticated');
const OrdersControllers = require('../controllers/OrdersControllers');
const ordersControllers = new OrdersControllers;
const orderRoutes = Router();

orderRoutes.get('/', ensureAuthenticated, (req, res) => {
    res.status(200).json({
        "message": "order route"
    });
})

orderRoutes.post('/', ordersControllers.store);

module.exports = orderRoutes;