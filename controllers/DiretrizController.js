const DiretrizModel = require('../models/DiretrizModel').DiretrizModel;

class DiretrizController {

  async listar(req, res){ 
    // #swagger.tags = ['Diretrizes']
    const resultado = await DiretrizModel.find({});
    res.json(resultado);
  }

  async buscarPorId(req, res){ 
    // #swagger.tags = ['Diretrizes']
    const id = req.params.id;
    const diretriz = await DiretrizModel.findOne({'_id': id});
    res.json(diretriz);
  }

  async salvar(req, res) {  
    // #swagger.tags = ['Diretrizes']           
    const diretriz = req.body;
    const resultado = await DiretrizModel.create(diretriz);
    res.json(resultado);
  }

  async atualizar(req, res){ 
    // #swagger.tags = ['Diretrizes']
    const id = req.params.id;
    const diretriz = req.body;        
    const resultado = await DiretrizModel.findOneAndUpdate({'_id': id}, diretriz, {new: true});
    res.json(resultado);
  }

  async excluir(req, res){ 
    // #swagger.tags = ['Diretrizes']
    const id = req.params.id;
    await DiretrizModel.findOneAndDelete({'_id': id});
    res.send("Excluído(a) com sucesso!");
  }
}

module.exports = new DiretrizController();