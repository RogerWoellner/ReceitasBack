const AulaController = require('../controllers/AulaController');
const express = require('express');

const Router = express.Router();

Router.get('/', AulaController.listar);
Router.get('/:id', AulaController.buscarPorId);
Router.post('/', AulaController.salvar);
Router.put('/:id', AulaController.atualizar);
Router.delete('/:id', AulaController.excluir);

module.exports = Router;
