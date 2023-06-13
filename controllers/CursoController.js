const CursoModel = require('../models/CursoModel').CursoModel;
const DisciplinaModel = require('../models/DisciplinaModel').DisciplinaModel;
const DcnModel = require('../models/DcnModel').DcnModel;

class CursoController {

  async listar(req, res){ 
    // #swagger.tags = ['Cursos']
    const resultado = await CursoModel.find({})
      .populate('disciplinas');
    res.json(resultado);
  }

  async buscarPorId(req, res){
    // #swagger.tags = ['Cursos']
    const id = req.params.id;
    const curso = await CursoModel.findOne({'_id': id});
    res.json(curso);
  }

  async salvar(req, res) {         
    // #swagger.tags = ['Cursos']   
    const curso = req.body;
    const idDaDcn = curso.dcn;
    const idsDasDisciplinas = curso.disciplinas;

    //Vincula a dcn ao curso
    if (idDaDcn != null && idDaDcn != 'undefined' && idDaDcn != ''){
      curso.dcn = await DcnModel.findOne({'_id': idDaDcn});
    }

    //Vincula as disciplinas ao curso
    if (idsDasDisciplinas != null && idsDasDisciplinas != 'undefined' 
        && idsDasDisciplinas != '' && idsDasDisciplinas.length > 0){
      curso.disciplinas = await DisciplinaModel.find({'_id': {$in: idsDasDisciplinas}});
    }

    const resultado = await CursoModel.create(curso);
    res.json(resultado);
  }

  async atualizar(req, res){
    // #swagger.tags = ['Cursos']
    const id = req.params.id;
    const curso = req.body;
    const idDaDcn = curso.dcn;

    //Atualiza a dcn no curso
    if (idDaDcn != null && idDaDcn != 'undefined' && idDaDcn != ''){
        curso.dcn = await DcnModel.findOne({'_id': idDaDcn})
    }

    const resultado = await CursoModel.findOneAndUpdate({'_id': id}, curso, {new: true});
    res.json(resultado);
    
  }

  async atualizarDisciplinas(req, res){
    // #swagger.tags = ['Cursos']
    const idDoCurso = req.params.id;
    const idsDasDisciplinas = req.body;
    
    if(idsDasDisciplinas != null && idsDasDisciplinas != 'undefined' && idsDasDisciplinas.length > 0){
      const disciplinasAtualizar = await DisciplinaModel.find({'_id': {$in: idsDasDisciplinas}});
      await CursoModel.findOneAndUpdate({'_id': idDoCurso}, {$set: {disciplinas: disciplinasAtualizar}});
    } else {
      await CursoModel.findOneAndUpdate({'_id': idDoCurso}, {$set: {disciplinas: []}});
    }

    const resultado = await CursoModel.findOne({'_id': idDoCurso});
    res.json(resultado);
  }

  async excluir(req, res){
    // #swagger.tags = ['Cursos']
    const id = req.params.id;
    await CursoModel.findOneAndDelete({'_id': id});
    res.send("Excluído(a) com sucesso!");
  }
}

module.exports = new CursoController();