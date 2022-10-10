const AppError = require("../utils/AppError");
const pool = require("../configs/db/connect");
const { response } = require('express');

class ProductsController {
  async index(req, res) {
    try {
      pool.query(`SELECT * FROM products;`, (error, response) => {
        if (error) {
          throw new AppError(error, 401);
        } else {
          res.json(response.rows);
        }
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async show(req, res) {
    const { slug } = req.params;
    try {
      pool.query(
        `SELECT * FROM products WHERE slug = '${slug}'`,
        (error, response) => {
          if (error) {
            throw new AppError(error, 401);
          } else {
            res.json(response.rows);
          }
        }
      );
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async findbyColor(req, res) {
    const color = req.query["color"];
    const { slug } = req.params;

    try {
      pool.query(
        `SELECT * FROM products WHERE slug = '${slug}' AND color = '${color}'`,
        (error, response) => {
          if (error) {
            throw new AppError(error, 401);
          } else {
            res.json(response.rows);
          }
        }
      );
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  // async findbySize (req, res) {
  //   const {slug} = req.params;
	// const size = req.query['size']
	// try {
	// 	pool.query(`SELECT * FROM products WHERE slug = '${slug}' AND size = '${size}'`, (error, response) => {
	// 		if(error) { 
	// 			throw new AppError(error, 401);
	// 		} else {
	// 			res.json(response.rows)	
	// 		}
	// 	});
	// } catch (error) {
	// 	res.status(500).json({error});
	// }
  // }

}

module.exports = ProductsController;
