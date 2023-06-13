const DominioController = require('../controllers/DominioController');
const express = require('express');

const Router = express.Router();

Router.get('/', DominioController.listar);
Router.get('/:id', DominioController.buscarPorId);
Router.post('/', DominioController.salvar);
Router.put('/:id', DominioController.atualizar);
Router.delete('/:id', DominioController.excluir);

module.exports = Router;
