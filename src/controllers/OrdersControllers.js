const AppError = require('../utils/AppError');
const pool = require('../configs/db/connect')

class OrdersControllers {

    async index (req, res) {
        try {
            pool.query(`SELECT * FROM orders;`, (error, response) => {
                if (error){
                    throw new AppError(error, 401);
                } else {
                    const orders = response.rows
                    res.json(orders)
                }
            });
        } catch (error) {
            res.status(500).json({ error });
        }

    }

    async store(req, res) {
        const client = await pool.connect()
        const {customer_name, customer_phone} = req.body
        client.query(`INSERT INTO orders(customer_name, customer_phone) VALUES('${customer_name}', '${customer_phone}')`, (error, response) =>{
            if(error) {
                throw new AppError(error, 401);
            } else {
                const orders = response.rows
                return res.status(201).json({
                    orders
                })
            }
        })
        // pool.end();
    }
}

// async function() {
//     const client = await pool.connect()
//     await client.query('SELECT NOW()')
//     client.release()
//   })()

module.exports = OrdersControllers;