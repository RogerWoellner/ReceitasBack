const mongoose = require('mongoose');

const DiretrizSchema = new mongoose.Schema({
  _id: { type: Number, required: true, default: -1 },
  dcn: { type: Number, ref: 'dcn', required : [true, "DCN é obrigatória!"] },
  descricao : { type: String, required : [true, "Descrição é obrigatória!"]},
  dimensoes: [{type: Number, ref: 'dimensao'}],
  chaves: [String],
  pagina: Number,
  artigo: Number,
  paragrafo: String
}, { 
  collection: 'diretrizes' 
},{
  versionKey: false 
});

DiretrizSchema.pre('save', async function(next){
  if (this._id < 1){
    const Model = mongoose.model('diretriz', DiretrizSchema);
    const objMaxId = await Model.findOne().sort({'_id': -1});
    this._id = objMaxId == null ? 1 : objMaxId._id + 1;
  }
  next();
});

module.exports = {
  DiretrizSchema: DiretrizSchema,
  DiretrizModel: mongoose.model('diretriz', DiretrizSchema)
}