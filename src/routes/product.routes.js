const { Router } = require('express');
const productRoutes = Router();

productRoutes.get('/', (req, res) => {
    res.status(200).json({
        "message": "product route",
    });
});

module.exports = productRoutes;