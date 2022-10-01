const db = require("../config/connectDB");

class ProductsController {
  async index(req, res, next) {
    try {
      const product = await db.query(`SELECT * FROM products`);
      res.json({
        products,
      });
    } catch (error) {
      res.status(500).json({ error });
    }
    next();
  }

  async show(req, res, next) {
    let slug = req.params.slug;

    try {
      const products = await db.query(
        `SELECT * FROM products WHERE id = ${slug}`
      );
      res.json({
        products,
      });
    } catch (error) {
      res.status(500).json({ error });
    }
    next();
  }
}

module.exports = ProductsController;
