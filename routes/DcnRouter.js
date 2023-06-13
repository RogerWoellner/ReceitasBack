const DcnController = require('../controllers/DcnController');
const express = require('express');

const Router = express.Router();

Router.get('/', DcnController.listar);
Router.get('/:id', DcnController.buscarPorId);
Router.post('/', DcnController.salvar);
Router.put('/:id', DcnController.atualizar);
Router.delete('/:id', DcnController.excluir);

module.exports = Router;
