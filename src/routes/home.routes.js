const { Router } = require('express');
const homeRoutes = Router();

homeRoutes.get('/', (req, res) => {
    res.status(200).json({
        "message": "home route"
    });
});

module.exports = homeRoutes;