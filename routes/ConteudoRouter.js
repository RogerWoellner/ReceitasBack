const ConteudoController = require('../controllers/ConteudoController');
const express = require('express');

const Router = express.Router();

Router.get('/', ConteudoController.listar);
Router.get('/:id', ConteudoController.buscarPorId);
Router.post('/', ConteudoController.salvar);
Router.put('/:id', ConteudoController.atualizar);
Router.delete('/:id', ConteudoController.excluir);

module.exports = Router;
