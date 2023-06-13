const AtitudeController = require('../controllers/AtitudeController');
const express = require('express');

const Router = express.Router();

Router.get('/', AtitudeController.listar);
Router.get('/:id', AtitudeController.buscarPorId);
Router.post('/', AtitudeController.salvar);
Router.put('/:id', AtitudeController.atualizar);
Router.delete('/:id', AtitudeController.excluir);

module.exports = Router;
