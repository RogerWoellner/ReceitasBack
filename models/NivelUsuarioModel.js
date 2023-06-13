const mongoose = require('mongoose');

const Nivel = {
  ADMIN: "Admin",
  COORDENADOR: "Coordenador",
  PROFESSOR: "Professor",
  USUARIO: "Usuário",
  ANONIMO: "Anônimo"
}

const Permissao = {
  LISTAR: "Listar",
  INCLUIR: "Incluir",
  ALTERAR: "Alterar",
  EXCLUIR: "Excluir"
}

const NivelUsuarioSchema = new mongoose.Schema({
  _id: { type: Number, required: true, default: -1 },
  nivel: { type: String, required : [true, "Nível é obrigatório!"]},
  descricao : String,
  permissoes : [String],
  acessos: [String]
}, { 
  collection: 'niveis_usuarios' 
}, { 
  versionKey: false 
});

NivelUsuarioSchema.pre('save', async function(next){
  if (this._id < 1){
    const Model = mongoose.model('nivel_usuario', NivelUsuarioSchema);
    const objMaxId = await Model.findOne().sort({'_id': -1});
    this._id = objMaxId == null ? 1 : objMaxId._id + 1;
  }
  next();
});

module.exports = {
  Nivel: Nivel,
  Permissao: Permissao,
  NivelUsuarioSchema: NivelUsuarioSchema,
  NivelUsuarioModel: mongoose.model('nivel_usuario', NivelUsuarioSchema)
}