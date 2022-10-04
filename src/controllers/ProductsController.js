const AppError = require('../utils/AppError');
const pool = require("../configs/db/connect");

class ProductsController {
  async index(req, res) {
    try {

        pool.query(`SELECT * FROM products;`, (error, response) => {
          if(error){
            throw new AppError(error, 401)
          } else {
            res.json(response.rows)
          }}
        );

    } catch (error) {
      res.status(500).json({ error });
    }

  }

  async show(req, res) {
    const { slug } = req.params;
    try {
      pool.query(`SELECT * FROM products WHERE slug = '${slug}'`, (error, response) => {
        if(error){
          throw new AppError(error, 401);
        } else {
          res.json(response.rows);
        }
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async findbyQuery(req, res) {

    const color = req.query['color'];
    const {slug} = req.params;

    try {
      pool.query(`SELECT * FROM products WHERE slug = '${slug}' AND color = '${color}'`, (error, response) => {
        if(error){
          throw new AppError(error, 401);
        } else {
          res.json(response.rows);
        }
      });
    } catch(error){
      res.status(500).json({error});
    }
  }
}

module.exports = ProductsController;
