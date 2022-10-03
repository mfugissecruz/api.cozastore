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
            const users = await pool.query(`SELECT * FROM customers`, (err, res) => {
                if (err){
                    console.log("Error - Failed to select all from Users");
                    console.log(err);
                }
            });
            res.json(users);
        } catch (error) {
            res.status(500).json({ error });
        }

    }

    async show (req, res) {
        const user_id = req.user.id;
        console.log(user_id, req.user.id);
        try {
            const users = await pool.query(`SELECT * FROM customers WHERE id = ${user_id}`);
            res.json({
                users
            });
        } catch (error) {
            res.status(500).json({ error });
        }

    }

    async store (req, res) {
        try {
            const { name, phone, address, email, password } = req.body;
            const user = await pool.none('INSERT INTO customers(name, phone, address, email, password) VALUES(${name}, ${phone}, ${address}, ${email}, ${password})',
            { name, phone, address, email, password });
        
            return res.status(200).json({user});

        } catch (error) {
            res.status(500).json({ error });
        }
    }
}

module.exports = UsersController;

