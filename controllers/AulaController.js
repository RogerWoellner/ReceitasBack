const AulaModel = require('../models/AulaModel').AulaModel;

class AulaController {

  async listar(req, res){ 
    // #swagger.tags = ['Aulas']
    const resultado = await AulaModel.find({});
    res.json(resultado);
  }

  async buscarPorId(req, res){
    // #swagger.tags = ['Aulas']
    const id = req.params.id;
    const aula = await AulaModel.findOne({'_id': id});
    res.json(aula);
  }

  async salvar(req, res) { 
    // #swagger.tags = ['Aulas']           
    const aula = req.body;
    const resultado = await AulaModel.create(aula);
    res.json(resultado);
  }

  async atualizar(req, res){
    // #swagger.tags = ['Aulas']
    const id = req.params.id;
    const aula = req.body;        
    const resultado = await AulaModel.findOneAndUpdate({'_id': id}, aula, {new: true});
    res.json(resultado);
  }

  async excluir(req, res){
    // #swagger.tags = ['Aulas']
    const id = req.params.id;
    await AulaModel.findOneAndDelete({'_id': id});
    res.send("Excluído(a) com sucesso!");
  }
}

module.exports = new AulaController();