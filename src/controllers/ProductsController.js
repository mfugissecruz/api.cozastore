const AppError = require('../utils/AppError');
const pool = require("../configs/db/connect");
const { response } = require('express');

class ProductsController {
  async index(req, res) {
    try {
        pool.query(`SELECT * FROM products`, (error, response) => {
          if(error){
            throw new AppError(error, 401)
          } else {
            const products = response.rows
            res.json({
              products,
            })
          }
        });
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
      pool.query(`SELECT * FROM products WHERE slug = '${slug}'`, () => {
        if(error){
          throw new AppError(error, 401);
        } else {
          const product = response.rows;
          res.json({
            product,
          });
        }
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}

module.exports = ProductsController;
