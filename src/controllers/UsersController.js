/**
 * function index - GET -> para listar vários registros,
 * function show - GET -> para exibir um registro específico,
 * function store - POST -> para criar um registro,
 * function update - PUT -> para atualizar um registro,
 * function destroy - DELETE -> para remover um registo.
 */

const pool = require('../configs/db/connect');

class UsersController {
    async index (req, res) {
        try {
            pool.query(`SELECT * FROM customers;`, (err, response) => {
                if (err){
                    console.log("Error - Failed to select all from Users");
                    console.log(err);
                } else {
                    const users = response.rows
                    res.json({
                        users,
                    })
                }
            });
        } catch (error) {
            res.status(500).json({ error });
        }

    }

    async show (req, res) {
        // const user_id = req.user.id;
        // console.log(user_id, req.user.id);
        const { id } = req.params; 
        try {
            const user = await pool.query(`SELECT * FROM customers WHERE id = ${id}`);
            res.json({
                user
            });
        } catch (error) {
            res.status(500).json({ error });
        }

    }

    async store (req, res) {
        try {
            const { name, phone, address, email, password } = req.body;

            await pool.query(
                `INSERT INTO customers (name, phone, address, email, password) VALUES('${name}', '${phone}', '${address}', '${email}', '${password}')`,  
                (err, response) => {
                    if (err){
                        console.log("Error - Failed to insert data into Users");
                        console.log(err);
                    }
                }
            );
        
            return res.status(201)

        } catch (error) {
            res.status(500).json({ error });
        }
    }
}

module.exports = UsersController;

