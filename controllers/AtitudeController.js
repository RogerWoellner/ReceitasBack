const AtitudeModel = require('../models/AtitudeModel').AtitudeModel;

class AtitudeController {

  async listar(req, res){ 
    // #swagger.tags = ['Atitudes']
    const resultado = await AtitudeModel.find({});
    res.json(resultado);
  }

  async buscarPorId(req, res){
    // #swagger.tags = ['Atitudes']
    const id = req.params.id;
    const atitude = await AtitudeModel.findOne({'_id': id});
    res.json(atitude);
  }

  async salvar(req, res) {            
    // #swagger.tags = ['Atitudes']
    const atitude = req.body;
    const resultado = await AtitudeModel.create(atitude);
    res.json(resultado);
  }

  async atualizar(req, res){
    // #swagger.tags = ['Atitudes']
    const id = req.params.id;
    const atitude = req.body;        
    const resultado = await AtitudeModel.findOneAndUpdate({'_id': id}, atitude, {new: true});
    res.json(resultado);
  }

  async excluir(req, res){
    // #swagger.tags = ['Atitudes']
    const id = req.params.id;
    await AtitudeModel.findOneAndDelete({'_id': id});
    res.send("Excluído(a) com sucesso!");
  }
}

module.exports = new AtitudeController();