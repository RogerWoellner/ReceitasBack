const UsuarioController = require('../controllers/UsuarioController');
const express = require('express');

const Router = express.Router();

Router.get('/', UsuarioController.listar);
Router.post('/', UsuarioController.salvar);
Router.get('/:id', UsuarioController.buscarPorId);
Router.put('/:id', UsuarioController.atualizar);
Router.delete('/:id', UsuarioController.excluir);

module.exports = Router;