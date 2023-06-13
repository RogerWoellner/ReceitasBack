const mongoose = require('mongoose');

const Midia = {
  LIVRO: 'Livro',
  EBOOK: 'E-book',
  AUDIO: 'Áudio',
  VIDEO: 'Vídeo',
  SITE: 'Site'
}

const BibliografiaSchema = new mongoose.Schema({
  _id: { type: Number, required: true, default: -1 },
  titulo : { type: String, required : [true, "Título é obrigatório!"]},
  midia: { type: String, enum: Object.values(Midia), required : [true, "Mídia é obrigatória!"]},
}, { 
  versionKey: false 
});

BibliografiaSchema.pre('save', async function(next){
  if (this._id < 1){
    const Model = mongoose.model('bibliografia', BibliografiaSchema);
    const objMaxId = await Model.findOne().sort({'_id': -1});
    this._id = objMaxId == null ? 1 : objMaxId._id + 1;
  }
  next();
});

module.exports = {
  Midia: Midia,
  BibliografiaSchema: BibliografiaSchema,
  BibliografiaModel: mongoose.model('bibliografia', BibliografiaSchema)
}