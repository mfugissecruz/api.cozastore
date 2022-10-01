require("dotenv/config");

const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const app = express();
const routes = require('./src/routes');

app.use(routes);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next)=>{
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

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.statusCode || 500);
    return res.json({
        error: {
            'message': error.message
        }
    });
});
const PORT = process.env.PORT || 5555;
app.listen(PORT)
