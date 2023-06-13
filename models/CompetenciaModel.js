const mongoose = require('mongoose');
const AtitudeSchema = require('./AtitudeModel').AtitudeSchema;
const ConteudoSchema = require('./ConteudoModel').ConteudoSchema;
const HabilidadeSchema = require('./HabilidadeModel').HabilidadeSchema;

const Objetivo = {
  GLOBAL: 'Global',
  ESPECIFICO: 'Específico'
}

const CompetenciaSchema = new mongoose.Schema({
  _id: { type: Number, required: true, default: -1 },
  diretriz: {type: Number, required : [true, "Diretriz é obrigatória!"]},
  descricao : { type: String, required : [true, "Descrição é obrigatória!"]},
  objetivo: { type: String, required : [true, "Objetivo é obrigatório!"]},
  linhas:  [{ type: Number, ref: 'linha' }],
  dimensoes: [{ type: Number, ref: 'dimensao'}],
  atitudes: [{ type: Number, ref: 'atitude'}],
  conteudos: [{ type: Number, ref: 'conteudo'}],
  habilidades: [{ type: Number, ref: 'habilidade'}],
  especifica: {type: Number, ref: 'competencia'}
}, { 
  versionKey: false 
});

CompetenciaSchema.pre('save', async function(next){
  if (this._id < 1){
    const Model = mongoose.model('competencia', CompetenciaSchema);
    const objMaxId = await Model.findOne().sort({'_id': -1});
    this._id = objMaxId == null ? 1 : objMaxId._id + 1;
  }
  next();
});

module.exports = {
  Objetivo: Objetivo,
  CompetenciaSchema: CompetenciaSchema,
  CompetenciaModel: mongoose.model('competencia', CompetenciaSchema)
}