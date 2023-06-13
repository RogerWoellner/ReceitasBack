const AtividadeController = require('../controllers/AtividadeController');
const express = require('express');

const Router = express.Router();

Router.get('/', AtividadeController.listar);
Router.get('/:id', AtividadeController.buscarPorId);
Router.post('/', AtividadeController.salvar);
Router.put('/:id', AtividadeController.atualizar);
Router.delete('/:id', AtividadeController.excluir);

module.exports = Router;
