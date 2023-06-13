const ConteudoModel = require('../models/ConteudoModel').ConteudoModel;

class ConteudoController {

  async listar(req, res){ 
    // #swagger.tags = ['Conteúdos']
    const resultado = await ConteudoModel.find({});
    res.json(resultado);
  }

  async buscarPorId(req, res){
    // #swagger.tags = ['Conteúdos']
    const id = req.params.id;
    const conteudo = await ConteudoModel.findOne({'_id': id});
    res.json(conteudo);
  }

  async salvar(req, res) {         
    // #swagger.tags = ['Conteúdos']   
    const conteudo = req.body;
    const resultado = await ConteudoModel.create(conteudo);
    res.json(resultado);
  }

  async atualizar(req, res){
    // #swagger.tags = ['Conteúdos']
    const id = req.params.id;
    const conteudo = req.body;        
    const resultado = await ConteudoModel.findOneAndUpdate({'_id': id}, conteudo, {new: true});
    res.json(resultado);
  }

  async excluir(req, res){
    // #swagger.tags = ['Conteúdos']
    const id = req.params.id;
    await ConteudoModel.findOneAndDelete({'_id': id});
    res.send("Excluído(a) com sucesso!");
  }
}

module.exports = new ConteudoController();