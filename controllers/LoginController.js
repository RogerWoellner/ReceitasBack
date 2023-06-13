const UsuarioModel = require('../models/UsuarioModel').UsuarioModel;
const Auth = require('../auth/Auth');
const bcryptjs = require('bcryptjs');

class LoginController {

  /*
    login: admin@login.com, usuario@login.com
    senha: Senha123
  */

  async login(req, res){
    // #swagger.tags = ['Login']
    const { login, senha } = req.body;
    const usuario = await UsuarioModel.findOne({'login': login})
           .select('+senha').populate('nivel');
    if (!usuario) {
      return res.status(400).send({error: 'Usuário não encontrado!'});
    }

    if (!await bcryptjs.compare(senha, usuario.senha)){
      return res.status(400).send({error: 'Senha inválida!'});
    }

    await Auth.incluirToken(usuario);
    res.status(200).json(usuario);
  }
}

module.exports = new LoginController();