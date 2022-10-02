const db = require("../configs/db/connect");

class ProductsController {
  async index(req, res) {
    try {
      const product = await db.query(`SELECT * FROM products`);
      return res.json({
        product
      });

    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async show(req, res) {
    let slug = req.params.slug;
    try {
      const products = await db.query(`SELECT * FROM products WHERE slug = '${slug}'`);
      res.json({
        products,
      });
      
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}

module.exports = ProductsController;
