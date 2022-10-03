const { Router } = require('express');
const UsersController = require('../controllers/UsersController');
// const ensureAuthenticated = require('../middleware/ensureAuthenticated');

const usersController = new UsersController();
const userRoutes = Router();
userRoutes.get('/', usersController.index);
userRoutes.get('/:id', usersController.show);
userRoutes.post('/', usersController.store);

module.exports = userRoutes;