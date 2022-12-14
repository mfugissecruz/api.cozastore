/**
 * function index - GET -> para listar vários registros,
 * function show - GET -> para exibir um registro específico,
 * function store - POST -> para criar um registro,
 * function update - PUT -> para atualizar um registro,
 * function destroy - DELETE -> para remover um registo.
 */
const AppError = require('../utils/AppError');
const pool = require('../configs/db/connect');

class UsersController {
    async index (req, res) {
        try {
            pool.query(`SELECT * FROM customers;`, (error, response) => {
                if (error){
                    throw new AppError(error, 401);
                } else {
                    const users = response.rows
                    res.json(users)
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
            pool.query(`SELECT * FROM customers WHERE id = ${id}`, (error, response) => {
                if(error){
                    throw new AppError(error, 401);
                } else {
                    const user = response.rows
                    res.json(
                        user
                    )
                }
            });
        } catch (error) {
            res.status(500).json({ error });
        }

    }

    async store (req, res) {
        const client = await pool.connect()
        const { name, phone, address, email, password } = req.body;

        client.query(
            `INSERT INTO customers (name, phone, address, email, password) VALUES('${name}', '${phone}', '${address}', '${email}', '${password}')`,  
            (error, response) => {
                if (error){
                    throw new AppError(error, 401);
                } else {
                    const users = response.rows
                    return res.status(201).json({
                        users
                    })
                }
        });
    }
}

module.exports = UsersController;

