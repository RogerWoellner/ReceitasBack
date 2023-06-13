const ProfessorController = require('../controllers/ProfessorController');
const express = require('express');

const Router = express.Router();

Router.get('/', ProfessorController.listar);
Router.get('/:id', ProfessorController.buscarPorId);
Router.post('/', ProfessorController.salvar);
Router.put('/:id', ProfessorController.atualizar);
Router.delete('/:id', ProfessorController.excluir);

module.exports = Router;
