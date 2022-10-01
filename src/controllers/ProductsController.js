const db = require('../config/connectDB');

class ProdcutsController {
    async index (req, res) {
        try {
            const product = await db.query(`SELECT * FROM products`);
            res.json({
                products
            })
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    async show (req, res) {
        let slug = req.params.slug;

        try {
            const users = await db.query(`SELECT * FROM products WHERE id = ${slug}`);
            res.json({
                products
            })
        } catch (error) {
            res.status(500).json({ error });
        }
    }

}