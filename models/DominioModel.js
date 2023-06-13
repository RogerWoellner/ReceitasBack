const mongoose = require('mongoose');

const DominioSchema = new mongoose.Schema({
  _id: { type: Number, required: true, default: -1 },
  dominio : { type: String, required : [true, "Domínio é obrigatória!"]},
  verbo : { type: String, required : [true, "Verbo é obrigatório!"]}
}, { 
  versionKey: false 
});

DominioSchema.pre('save', async function(next){
  if (this._id < 1){
    const Model = mongoose.model('dominio', DominioSchema);
    const objMaxId = await Model.findOne().sort({'_id': -1});
    this._id = objMaxId == null ? 1 : objMaxId._id + 1;
  }
  next();
});

module.exports = {
  DominioSchema: DominioSchema,
  DominioModel: mongoose.model('dominio', DominioSchema)
}