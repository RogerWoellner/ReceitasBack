const NivelController = require('../controllers/NivelUsuarioController');
const express = require('express');

const Router = express.Router();

Router.get('/', NivelController.listar);
Router.post('/', NivelController.salvar);
Router.get('/:id', NivelController.buscarPorId);
Router.put('/:id', NivelController.atualizar);
Router.delete('/:id', NivelController.excluir);

module.exports = Router;