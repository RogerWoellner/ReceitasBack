const CompetenciaController = require('../controllers/CompetenciaController');
const express = require('express');

const Router = express.Router();

Router.get('/', CompetenciaController.listar);
Router.get('/:id', CompetenciaController.buscarPorId);
Router.post('/', CompetenciaController.salvar);
Router.put('/:id', CompetenciaController.atualizar);
Router.delete('/:id', CompetenciaController.excluir);

module.exports = Router;
