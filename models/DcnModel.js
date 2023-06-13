const mongoose = require('mongoose');

const DcnSchema = new mongoose.Schema({
  _id: { type: Number, required: true, default: -1 },
  descricao : { type: String, required : [true, "Descrição é obrigatória!"]},
  diretrizes: [{ type: Number, ref: 'diretriz' }]
}, { 
  versionKey: false 
});

DcnSchema.pre('save', async function(next){
  if (this._id < 1){
    const Model = mongoose.model('dcn', DcnSchema);
    const objMaxId = await Model.findOne().sort({'_id': -1});
    this._id = objMaxId == null ? 1 : objMaxId._id + 1;
  }
  next();
});

module.exports = {
  DcnSchema: DcnSchema,
  DcnModel: mongoose.model('dcn', DcnSchema)
}