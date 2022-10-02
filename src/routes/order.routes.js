const { Router } = require('express');
const ensureAuthenticated = require('../middleware/ensureAuthenticated');

const orderRoutes = Router();
orderRoutes.get('/', ensureAuthenticated, (req, res) => {
    res.status(200).json({
        "message": "order route"
    });
})

module.exports = orderRoutes;