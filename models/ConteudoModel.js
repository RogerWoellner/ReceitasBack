const mongoose = require('mongoose');

const ConteudoSchema = new mongoose.Schema({
  _id: { type: Number, required: true, default: -1 },
  descricao : { type: String, required : [true, "Descrição é obrigatória!"]}
}, { 
  versionKey: false 
});

ConteudoSchema.pre('save', async function(next){
  if (this._id < 1){
    const Model = mongoose.model('conteudo', ConteudoSchema);
    const objMaxId = await Model.findOne().sort({'_id': -1});
    this._id = objMaxId == null ? 1 : objMaxId._id + 1;
  }
  next();
});

module.exports = {
  ConteudoSchema: ConteudoSchema,
  ConteudoModel: mongoose.model('conteudo', ConteudoSchema)
}