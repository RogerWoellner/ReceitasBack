const mongoose = require('mongoose');

const PerfilEgressoSchema = new mongoose.Schema({
  _id: { type: Number, required: true, default: -1 },
  nivel : { type: String, required : [true, "Nível é obrigatório!"]},
  descricao : { type: String, required : [true, "Descrição é obrigatória!"]}
}, { 
  collection: 'perfis_egressos' 
}, { 
  versionKey: false 
});

PerfilEgressoSchema.pre('save', async function(next){
  if (this._id < 1){
    const Model = mongoose.model('perfil_egresso', PerfilEgressoSchema);
    const objMaxId = await Model.findOne().sort({'_id': -1});
    this._id = objMaxId == null ? 1 : objMaxId._id + 1;
  }
  next();
});

module.exports = {
  PerfilEgressoSchema: PerfilEgressoSchema,
  PerfilEgressoModel: mongoose.model('perfil_egresso', PerfilEgressoSchema)
}