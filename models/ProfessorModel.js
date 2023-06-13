const mongoose = require('mongoose');

const ProfessorSchema = new mongoose.Schema({
  _id: { type: Number, required: true, default: -1 },
  nome : { type: String, required : [true, "Nome é obrigatório!"]},
  usuario: { type: Number, ref: 'usuario' },
  email : String,
  fone : String
},{ 
  collection: 'professores' 
},{ 
  versionKey: false 
});

ProfessorSchema.pre('save', async function(next){
  if (this._id < 1){
    const Model = mongoose.model('professor', ProfessorSchema);
    const objMaxId = await Model.findOne().sort({'_id': -1});
    this._id = objMaxId == null ? 1 : objMaxId._id + 1;
  }
  next();
});

module.exports = {
  ProfessorSchema: ProfessorSchema,
  ProfessorModel: mongoose.model('professor', ProfessorSchema)
}