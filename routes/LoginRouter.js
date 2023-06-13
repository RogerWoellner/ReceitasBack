const LoginController = require('../controllers/LoginController');
const express = require('express');

const Router = express.Router();

Router.post('/', LoginController.login);

module.exports = Router;