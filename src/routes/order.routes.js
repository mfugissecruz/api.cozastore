const { Router } = require('express');
const orderRoutes = Router();

orderRoutes.get('/', (req, res) => {
    res.status(200).json({
        "message": "order route"
    });
})

module.exports = orderRoutes;