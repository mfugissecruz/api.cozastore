/**
 * function index - GET -> para listar vários registros,
 * function show - GET -> para exibir um registro específico,
 * function store - POST -> para criar um registro,
 * function update - PUT -> para atualizar um registro,
 * function destroy - DELETE -> para remover um registo.
 */

const db = require('../config/connectDB');

class UsersController {
    async index (req, res, next) {
        try {
            const users = await db.query(`SELECT * FROM customers`);
            res.json({
                users
            })
        } catch (error) {
            res.status(500).json({ error });
        }

        next();
    }

    async show (req, res, next) {
        let id = req.params.id;

        try {
            const users = await db.query(`SELECT * FROM customers WHERE id = ${id}`);
            res.json({
                users
            })
        } catch (error) {
            res.status(500).json({ error });
        }

        next();
    }

    store (req, res, next) {
        const { name, email } = JSON.parse(req.body); 
        res.status(200).json({ name, email });

        next();
    }

    async store (req, res, next) {
        try {
            const { name, phone, address, email, password  } = JSON.parse(req.body);
            const user = await db.none
            (`INSERT INTO customers (name, phone, address, email, password)] VALUES ($1, $2, $3, $4, $5, $6,)`,
            [user.name, user.phone, user.address, user.email, user.password]);
            
            res.json({user})
        } catch (error) {
            res.status(500).json({ error });
        }
    
        next();
    }
}

module.exports = UsersController;

// const db = require("./db");

// module.exports = {
//   async findById(req, res) {
//     let id = req.params.id;

//     try {
//       let response = await db.query(`SELECT * FROM products WHERE id = ${id}`);
//       res.json(response[0]);
//     } catch (error) {
//       console.log(error);
//     }
//   },
// };
