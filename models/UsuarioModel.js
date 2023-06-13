const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const UsuarioSchema = new mongoose.Schema({
  _id: { type: Number, required: true, default: -1 },
  nivel: {type: Number, ref: 'nivel_usuario'},
  login: { type: String, unique: true, required: true, lowercase: true },
  senha: { type: String, required: true, select: false },
  dataCriacao: { type: Date, default: Date.now },
  token: { type: String, select: false }
},{ 
  versionKey: false 
});

UsuarioSchema.pre('save', async function(next){
  if (this._id < 1){
    const Model = mongoose.model('usuario', UsuarioSchema);
    const objMaxId = await Model.findOne().sort({'_id': -1});
    this._id = objMaxId == null ? 1 : objMaxId._id + 1;
  }
  const hash = await bcryptjs.hash(this.senha, 10);
  this.senha = hash;
  next();
});

module.exports = {
  UsuarioSchema: UsuarioSchema,
  UsuarioModel: mongoose.model('usuario', UsuarioSchema)
}