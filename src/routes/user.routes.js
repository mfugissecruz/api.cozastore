const { Router } = require('express');
const userRoutes = Router();

userRoutes.get('/', (req, res) => {
    res.status(200).json({
        "message": "user route"
    });
});

module.exports = userRoutes;