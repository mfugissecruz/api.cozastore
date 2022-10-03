require("dotenv/config");
require("express-async-errors");

const express = require('express');
const app = express();

const routes = require('./src/routes');
const AppError = require("./src/utils/AppError");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next)=> {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }

    next();
});

app.use(routes);

app.use((error, req, res, next) => {
    if(error instanceof AppError) {
        return res.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    console.error(error)

    return res.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})

const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
})


