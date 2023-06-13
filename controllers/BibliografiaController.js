const BibliografiaModel = require('../models/BibliografiaModel').BibliografiaModel;

class BibliografiaController {

  async listar(req, res){ 
    // #swagger.tags = ['Bibliografias']
    const resultado = await BibliografiaModel.find({});
    res.json(resultado);
  }

  async buscarPorId(req, res){
    // #swagger.tags = ['Bibliografias']
    const id = req.params.id;
    const bibliografia = await BibliografiaModel.findOne({'_id': id});
    res.json(bibliografia);
  }

  async salvar(req, res) {         
    // #swagger.tags = ['Bibliografias']   
    const bibliografia = req.body;
    const resultado = await BibliografiaModel.create(bibliografia);
    res.json(resultado);
  }

  async atualizar(req, res){
    // #swagger.tags = ['Bibliografias']
    const id = req.params.id;
    const bibliografia = req.body;        
    const resultado = await BibliografiaModel.findOneAndUpdate({'_id': id}, bibliografia, {new: true});
    res.json(resultado);
  }

  async excluir(req, res){
    // #swagger.tags = ['Bibliografias']
    const id = req.params.id;
    await BibliografiaModel.findOneAndDelete({'_id': id});
    res.send("Excluído(a) com sucesso!");
  }
}

module.exports = new BibliografiaController();