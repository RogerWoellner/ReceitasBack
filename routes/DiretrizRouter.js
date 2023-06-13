const DiretrizController = require('../controllers/DiretrizController');
const express = require('express');

const Router = express.Router();

Router.get('/', DiretrizController.listar);
Router.get('/:id', DiretrizController.buscarPorId);
Router.post('/', DiretrizController.salvar);
Router.put('/:id', DiretrizController.atualizar);
Router.delete('/:id', DiretrizController.excluir);

module.exports = Router;
