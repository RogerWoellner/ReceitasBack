const mongoose = require('mongoose');

const AtividadeSchema = new mongoose.Schema({
  _id: { type: Number, required: true, default: -1 },
  aula: {type: Number, ref: 'aula', required : [true, "Aula é obrigatória!"]},
  descricao : { type: String, required : [true, "Descricao é obrigatória!"]},
  competencias:  [{ type: Number, ref: 'competencia' }]
}, { 
  versionKey: false 
});

AtividadeSchema.pre('save', async function(next){
  if (this._id < 1){
    const Model = mongoose.model('atividade', AtividadeSchema);
    const objMaxId = await Model.findOne().sort({'_id': -1});
    this._id = objMaxId == null ? 1 : objMaxId._id + 1;
  }
  next();
});

module.exports = {
  AtividadeSchema: AtividadeSchema,
  AtividadeModel: mongoose.model('atividade', AtividadeSchema)
}