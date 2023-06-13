const PerfilEgressoModel = require('../models/PerfilEgressoModel').PerfilEgressoModel;

class PerfilEgressoController {

  async listar(req, res){ 
    // #swagger.tags = ['Perfis de egressos']
    const resultado = await PerfilEgressoModel.find({});
    res.json(resultado);
  }

  async buscarPorId(req, res){
    // #swagger.tags = ['Perfis de egressos']
    const perfil = await PerfilEgressoModel.findOne({'_id': req.params.id});
    res.json(perfil);
  }

  async salvar(req, res) { 
    // #swagger.tags = ['Perfis de egressos']           
    const perfil = req.body;
    const resultado = await PerfilEgressoModel.create(perfil);
    res.json(resultado);
  }

  async atualizar(req, res){
    // #swagger.tags = ['Perfis de egressos']
    const perfil = req.body;        
    const resultado = await PerfilEgressoModel.findOneAndUpdate({'_id': req.params.id}, perfil, {new: true});
    res.json(resultado);
  }

  async excluir(req, res){
    // #swagger.tags = ['Perfis de egressos']
    await PerfilEgressoModel.findOneAndDelete({'_id': req.params.id});
    res.send("Excluído(a) com sucesso!");
  }
}

module.exports = new PerfilEgressoController();