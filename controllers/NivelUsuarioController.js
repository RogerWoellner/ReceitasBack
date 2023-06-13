const NivelUsuarioModel = require('../models/NivelUsuarioModel').NivelUsuarioModel;

class NivelUsuarioController {

  async listar(req, res){
    // #swagger.tags = ['Níveis de usuários']
    const resultado = await NivelUsuarioModel.find({});
    res.status(200).json(resultado);
  }

  async buscarPorId(req, res){
    // #swagger.tags = ['Níveis de usuários']
    const resultado = await NivelUsuarioModel.findOne({'_id': req.params.id});
    res.status(200).json(resultado);
  }

  async salvar(req, res){
    // #swagger.tags = ['Níveis de usuários']
    const nivel = req.body;
    const resultado = await NivelUsuarioModel.create(nivel);
    res.status(201).json(resultado);
  }

  async atualizar(req, res){
    // #swagger.tags = ['Níveis de usuários']
    const nivel = req.body;
    await NivelUsuarioModel.findOneAndUpdate({'_id': req.params.id}, nivel);
    res.status(200).send();
  }

  async excluir(req, res){
    // #swagger.tags = ['Níveis de usuários']
    await NivelUsuarioModel.findOneAndRemove({'_id': req.params.id});
    res.status(200).send();
  }
}

module.exports = new NivelUsuarioController();