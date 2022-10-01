const { Router } = require('express');
const UsersController = require('../controllers/UsersController');
const userRoutes = Router();

const usersController = new UsersController();

userRoutes.get('/', usersController.index);
userRoutes.post('/', usersController.store)

module.exports = userRoutes;