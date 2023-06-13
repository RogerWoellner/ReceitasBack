const HabilidadeModel = require('../models/HabilidadeModel').HabilidadeModel;

class HabilidadeController {

  async listar(req, res){  
    // #swagger.tags = ['Habilidades']
    const resultado = await HabilidadeModel.find({});
    res.json(resultado);
  }

  async buscarPorId(req, res){ 
    // #swagger.tags = ['Habilidades']
    const id = req.params.id;
    const habilidade = await HabilidadeModel.findOne({'_id': id});
    res.json(habilidade);
  }

  async salvar(req, res) {    
    // #swagger.tags = ['Habilidades']         
    const habilidade = req.body;
    const resultado = await HabilidadeModel.create(habilidade);
    res.json(resultado);
  }

  async atualizar(req, res){ 
    // #swagger.tags = ['Habilidades']
    const id = req.params.id;
    const habilidade = req.body;        
    const resultado = await HabilidadeModel.findOneAndUpdate({'_id': id}, habilidade, {new: true});
    res.json(resultado);
  }

  async excluir(req, res){ 
    // #swagger.tags = ['Habilidades']
    const id = req.params.id;
    await HabilidadeModel.findOneAndDelete({'_id': id});
    res.send("Excluído(a) com sucesso!");
  }
}

module.exports = new HabilidadeController();