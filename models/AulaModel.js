const mongoose = require('mongoose');
const CompetenciaSchema = require('./CompetenciaModel').CompetenciaSchema;

const AulaSchema = new mongoose.Schema({
  _id: { type: Number, required: true, default: -1 },
  data : { type: Date, default: Date.now, required: true},
  titulo : { type: String, required : [true, "Título é obrigatório!"]},
  disciplinas: [{ type: Number, ref: 'disciplina' }],
  professor: { type: Number, ref: 'professor' },
  atividades: [{ type: Number, ref: 'atividade' }]
}, { 
  versionKey: false 
});

AulaSchema.pre('save', async function(next){
  if (this._id < 1){
    const Model = mongoose.model('aula', AulaSchema);
    const objMaxId = await Model.findOne().sort({'_id': -1});
    this._id = objMaxId == null ? 1 : objMaxId._id + 1;
  }
  next();
});

module.exports = {
  AulaSchema: AulaSchema,
  AulaModel: mongoose.model('aula', AulaSchema)
}