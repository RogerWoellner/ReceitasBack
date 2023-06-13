const ProfessorModel = require('../models/ProfessorModel').ProfessorModel;

class ProfessorController {

  async listar(req, res){  
    // #swagger.tags = ['Professores']
    const resultado = await ProfessorModel.find({});
    res.json(resultado);
  }

  async buscarPorId(req, res){  
    // #swagger.tags = ['Professores']
    const id = req.params.id;
    const professor = await ProfessorModel.findOne({'_id': id});
    res.json(professor);
  }

  async salvar(req, res) {       
    // #swagger.tags = ['Professores']       
    const professor = req.body;
    const resultado = await ProfessorModel.create(professor);
    res.json(resultado);
  }

  async atualizar(req, res){  
    // #swagger.tags = ['Professores']
    const id = req.params.id;
    const professor = req.body;        
    const resultado = await ProfessorModel.findOneAndUpdate({'_id': id}, professor, {new: true});
    res.json(resultado);
  }

  async excluir(req, res){  
    // #swagger.tags = ['Professores']
    const id = req.params.id;
    await ProfessorModel.findOneAndDelete({'_id': id});
    res.send("Excluído(a) com sucesso!");
  }
}

module.exports = new ProfessorController();