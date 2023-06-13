const CompetenciaModel = require('../models/CompetenciaModel').CompetenciaModel;

class CompetenciaController {

  async listar(req, res){ 
    // #swagger.tags = ['Competências']
    const resultado = await CompetenciaModel.find({});
    res.json(resultado);
  }

  async buscarPorId(req, res){
    // #swagger.tags = ['Competências']
    const id = req.params.id;
    const competencia = await CompetenciaModel.findOne({'_id': id});
    res.json(competencia);
  }

  async salvar(req, res) {         
    // #swagger.tags = ['Competências']   
    const competencia = req.body;
    const resultado = await CompetenciaModel.create(competencia);
    res.json(resultado);
  }

  async atualizar(req, res){
    // #swagger.tags = ['Competências']
    const id = req.params.id;
    const competencia = req.body;        
    const resultado = await CompetenciaModel.findOneAndUpdate({'_id': id}, competencia, {new: true});
    res.json(resultado);
  }

  async excluir(req, res){
    // #swagger.tags = ['Competências']
    const id = req.params.id;
    await CompetenciaModel.findOneAndDelete({'_id': id});
    res.send("Excluído(a) com sucesso!");
  }
}

module.exports = new CompetenciaController();