const UsuarioModel = require('../models/UsuarioModel').UsuarioModel;
const NivelUsuarioModel = require('../models/NivelUsuarioModel').NivelUsuarioModel;
const Auth = require('../auth/Auth');

class UsuarioController {

  async listar(req, res){
    // #swagger.tags = ['Usuários']
    const resultado = await UsuarioModel.find({}).populate('nivel');
    res.status(200).json(resultado);
  }

  async buscarPorId(req, res){
    // #swagger.tags = ['Usuários']
    const resultado = await UsuarioModel.findOne({'_id': req.params.id})
          .populate('nivel');
    res.status(200).json(resultado);
  }

  async salvar(req, res){
    // #swagger.tags = ['Usuários']
    const usuario = req.body;

    if (await UsuarioModel.findOne({'login': usuario.login})){
      res.status(400).send({error: 'Usuário já cadastrado!'});
    }

    usuario.nivel = await NivelUsuarioModel.findOne({'_id': usuario.nivel._id});;
    usuario.token = undefined;

    const resultado = await UsuarioModel.create(usuario);
    Auth.incluirToken(resultado);
    res.status(201).json(resultado);
  }

  async atualizar(req, res){
    // #swagger.tags = ['Usuários']
    const usuario = await Auth.gerarHash(req.body);

    usuario.nivel = await NivelUsuarioModel.findOne({'_id': usuario.nivel._id});
    usuario.token = undefined;

    await UsuarioModel.findOneAndUpdate({'_id': req.params.id}, usuario);
    res.status(200).send();
  }

  async excluir(req, res){
    // #swagger.tags = ['Usuários']
    await UsuarioModel.findOneAndRemove({'_id': req.params.id});
    res.status(200).send();
  }
}

module.exports = new UsuarioController();