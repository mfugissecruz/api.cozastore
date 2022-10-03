const pool = require("../configs/db/connect");
const AppError = require("../utils/AppError");

class HomeController {
  async index(req, res) {
    try {
      pool.query(`SELECT * FROM products WHERE pilot = true`, (error, response) => {
          if(error){
            throw new AppError(error, 401)
          } else {
            const products = response.rows
            res.json({
              products,
            })
          }
        }
      );
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}

module.exports = HomeController;
