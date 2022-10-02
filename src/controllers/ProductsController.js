const db = require("../config/db/connect");

class ProductsController {
  async index(req, res, next) {
    try {
      const product = await db.query(`SELECT * FROM products`);
      res.json({
        product
      });

      next();

    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async show(req, res, next) {
    let id = req.params.id;
    console.log(id);
    try {
      const products = await db.query(
        `SELECT * FROM products WHERE id = ${id}`
      );
      res.json({
        products,
      });
      
      next();

    } catch (error) {
      res.status(500).json({ error });
    }
  }
}

module.exports = ProductsController;
