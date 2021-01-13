const express = require('express');

const { UserConnectValidation, UserCreateValidation } = require('../middlewares/validations/UserValidations');
const AuthController = require('../controllers/AuthController');

const routes = express.Router();

//editing later
routes.post('/auth', UserConnectValidation, AuthController.authenticate);
routes.post('/sign', UserCreateValidation, AuthController.register);

module.exports = routes;