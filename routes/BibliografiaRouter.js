const BibliografiaController = require('../controllers/BibliografiaController');
const express = require('express');

const Router = express.Router();

Router.get('/', BibliografiaController.listar);
Router.get('/:id', BibliografiaController.buscarPorId);
Router.post('/', BibliografiaController.salvar);
Router.put('/:id', BibliografiaController.atualizar);
Router.delete('/:id', BibliografiaController.excluir);

module.exports = Router;
