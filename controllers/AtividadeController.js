const AtividadeModel = require('../models/AtividadeModel').AtividadeModel;

class AtividadeController {

  async listar(req, res){ 
    // #swagger.tags = ['Atividades']
    const resultado = await AtividadeModel.find({});
    res.json(resultado);
  }

  async buscarPorId(req, res){
    // #swagger.tags = ['Atividades']
    const id = req.params.id;
    const atividade = await AtividadeModel.findOne({'_id': id});
    res.json(atividade);
  }

  async salvar(req, res) {         
    // #swagger.tags = ['Atividades']   
    const atividade = req.body;
    const resultado = await AtividadeModel.create(atividade);
    res.json(resultado);
  }

  async atualizar(req, res){
    // #swagger.tags = ['Atividades']
    const id = req.params.id;
    const atividade = req.body;        
    const resultado = await AtividadeModel.findOneAndUpdate({'_id': id}, atividade, {new: true});
    res.json(resultado);
  }

  async excluir(req, res){
    // #swagger.tags = ['Atividades']
    const id = req.params.id;
    await AtividadeModel.findOneAndDelete({'_id': id});
    res.send("Excluído(a) com sucesso!");
  }
}

module.exports = new AtividadeController();