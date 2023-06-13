const mongoose = require('mongoose');

const CursoSchema = new mongoose.Schema({
  _id: { type: Number, required: true, default: -1 },
  dataCriacao : { type: Date, default: Date.now },
  nome : { type: String, required : [true, "Nome é obrigatório!"] },
  dcn : { type: Number, ref: 'dcn' },
  disciplinas: [{ type: Number, ref: 'disciplina' }],
  linhas:  [{ type: Number, ref: 'linha' }]
}, { 
  versionKey: false 
});

CursoSchema.pre('save', async function(next){
  if (this._id < 1){
    const Model = mongoose.model('curso', CursoSchema);
    const objMaxId = await Model.findOne().sort({'_id': -1});
    this._id = objMaxId == null ? 1 : objMaxId._id + 1;
  }
  next();
});

module.exports = {
  CursoSchema: CursoSchema,
  CursoModel: mongoose.model('curso', CursoSchema)
}