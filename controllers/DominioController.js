const DominioModel = require('../models/DominioModel').DominioModel;

class DominioController {

  async listar(req, res){  
    // #swagger.tags = ['Dominios']
    const resultado = await DominioModel.find({});
    res.json(resultado);
  }

  async buscarPorId(req, res){ 
    // #swagger.tags = ['Dominios']
    const id = req.params.id;
    const dominio = await DominioModel.findOne({'_id': id});
    res.json(dominio);
  }

  async salvar(req, res) {    
    // #swagger.tags = ['Dominios']         
    const dominio = req.body;
    const resultado = await DominioModel.create(dominio);
    res.json(resultado);
  }

  async atualizar(req, res){ 
    // #swagger.tags = ['Dominios']
    const id = req.params.id;
    const dominio = req.body;        
    const resultado = await DominioModel.findOneAndUpdate({'_id': id}, dominio, {new: true});
    res.json(resultado);
  }

  async excluir(req, res){ 
    // #swagger.tags = ['Dominios']
    const id = req.params.id;
    await DominioModel.findOneAndDelete({'_id': id});
    res.send("Excluído(a) com sucesso!");
  }
}

module.exports = new DominioController();