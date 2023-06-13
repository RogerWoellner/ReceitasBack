const PerfilController = require('../controllers/PerfilEgressoController');
const express = require('express');

const Router = express.Router();

Router.get('/', PerfilController.listar);
Router.get('/:id', PerfilController.buscarPorId);
Router.post('/', PerfilController.salvar);
Router.put('/:id', PerfilController.atualizar);
Router.delete('/:id', PerfilController.excluir);

module.exports = Router;
