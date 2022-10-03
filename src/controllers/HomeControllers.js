const db = require("../configs/db/connect");

class HomeController {
  async index(req, res) {
    try {
      const products = await db.query(
        `SELECT * FROM products WHERE pilot = true`
      );
      res.json(products);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}

module.exports = HomeController;
