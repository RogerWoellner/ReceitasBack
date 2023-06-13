const HabilidadeController = require('../controllers/HabilidadeController');
const express = require('express');

const Router = express.Router();

Router.get('/', HabilidadeController.listar);
Router.get('/:id', HabilidadeController.buscarPorId);
Router.post('/', HabilidadeController.salvar);
Router.put('/:id', HabilidadeController.atualizar);
Router.delete('/:id', HabilidadeController.excluir);

module.exports = Router;
