const CursoController = require('../controllers/CursoController');
const express = require('express');

const Router = express.Router();

Router.get('/', CursoController.listar);
Router.get('/:id', CursoController.buscarPorId);
Router.post('/', CursoController.salvar);
Router.put('/:id', CursoController.atualizar);
Router.put('/:id/disciplinas', CursoController.atualizarDisciplinas);
Router.delete('/:id', CursoController.excluir);

module.exports = Router;
