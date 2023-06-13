const DcnModel = require('../models/DcnModel').DcnModel;

class DcnController {

  async listar(req, res){ 
    // #swagger.tags = ['DCNs']
    const resultado = await DcnModel.find({});
    res.json(resultado);
  }

  async buscarPorId(req, res){
    // #swagger.tags = ['DCNs']
    const id = req.params.id;
    const dcn = await DcnModel.findOne({'_id': id});
    res.json(dcn);
  }

  async salvar(req, res) { 
    // #swagger.tags = ['DCNs']           
    const dcn = req.body;
    const resultado = await DcnModel.create(dcn);
    res.json(resultado);
  }

  async atualizar(req, res){
    // #swagger.tags = ['DCNs']
    const id = req.params.id;
    const dcn = req.body;      
    const resultado = await DcnModel.findOneAndUpdate({'_id': id}, dcn, {new: true});
    res.json(resultado);
  }

  async excluir(req, res){
    // #swagger.tags = ['DCNs']
    const id = req.params.id;
    await DcnModel.findOneAndDelete({'_id': id});
    res.send("Excluído(a) com sucesso!");
  }
}

module.exports = new DcnController();