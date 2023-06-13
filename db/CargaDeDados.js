require('./MongoConnection.js');

const AreaModel = require('../models/AreaModel').AreaModel;
const areas = require('./jsons/areas.json');

const LinhaModel = require('../models/LinhaModel').LinhaModel;
const linhas = require('./jsons/linhas.json');

const AtitudeModel = require('../models/AtitudeModel').AtitudeModel;
const atitudes = require('./jsons/atitudes.json');

const HabilidadeModel = require('../models/HabilidadeModel').HabilidadeModel;
const habilidades = require('./jsons/habilidades.json');

const PerfilEgressoModel = require('../models/PerfilEgressoModel').PerfilEgressoModel;
const perfisEgressos = require('./jsons/perfis_egressos.json');

const NivelUsuarioModel = require('../models/NivelUsuarioModel').NivelUsuarioModel;
const niveisUsuarios = require('./jsons/niveis_usuarios.json');

const UsuarioModel = require('../models/UsuarioModel').UsuarioModel;
const usuarios = require('./jsons/usuarios.json');

const BibliografiaModel = require('../models/BibliografiaModel').BibliografiaModel;
const bibliografias = require('./jsons/bibliografias.json');

const ProfessorModel = require('../models/ProfessorModel').ProfessorModel;
const professores = require('./jsons/professores.json');

const ConteudoModel = require('../models/ConteudoModel').ConteudoModel;
const conteudos = require('./jsons/conteudos.json');

const DcnModel = require('../models/DcnModel').DcnModel;
const DCNs = require('./jsons/DCNs.json');

const DiretrizModel = require('../models/DiretrizModel').DiretrizModel;
const diretrizes = require('./jsons/diretrizes.json');

const CompetenciaModel = require('../models/CompetenciaModel').CompetenciaModel;
const competencias = require('./jsons/competencias.json');

const CursoModel = require('../models/CursoModel').CursoModel;
const cursos = require('./jsons/cursos.json');

const DisciplinaModel = require('../models/DisciplinaModel').DisciplinaModel;
const disciplinas = require('./jsons/disciplinas.json');

const AulaModel = require('../models/AulaModel').AulaModel;
const aulas = require('./jsons/aulas.json');

const AtividadeModel = require('../models/AtividadeModel').AtividadeModel;
const atividades = require('./jsons/atividades.json');

async function carregar() {
  try {

    await AreaModel.deleteMany({});
    for (const area of areas) {
      await AreaModel.create(area);
    }
    console.log('Áreas carregadas!');

    await LinhaModel.deleteMany({});
    for (const linha of linhas) {
      await LinhaModel.create(linha);
    }
    console.log('Linhas carregadas!');
    
    await AtitudeModel.deleteMany({});
    for (const atitude of atitudes) {
      await AtitudeModel.create(atitude);
    }
    console.log('Atitudes carregadas!');  

    await HabilidadeModel.deleteMany({});
    for (const habilidade of habilidades) {
      await HabilidadeModel.create(habilidade);
    }
    console.log('Habilidades carregadas!');
    
    await PerfilEgressoModel.deleteMany({});
    for (const pEgresso of perfisEgressos) {
      await PerfilEgressoModel.create(pEgresso);
    }
    console.log('Perfis de egressos carregados!');
    
    await NivelUsuarioModel.deleteMany({});
    for (const nUsuario of niveisUsuarios) {
      await NivelUsuarioModel.create(nUsuario);
    }
    console.log('Perfis de usuários carregados!');

    await UsuarioModel.deleteMany({});
    for (const usuario of usuarios) {
      await UsuarioModel.create(usuario);
    }
    console.log('Usuários carregados!');

    await BibliografiaModel.deleteMany({});
    for (const bibliografia of bibliografias) {
      await BibliografiaModel.create(bibliografia);
    }
    console.log('Bibliografias carregadas!');

    await ProfessorModel.deleteMany({});
    for (const professor of professores) {
      await ProfessorModel.create(professor);
    }
    console.log('Professores carregados!');

    await ConteudoModel.deleteMany({});
    for (const conteudo of conteudos) {
      await ConteudoModel.create(conteudo);
    }
    console.log('Conteúdos carregados!');

    await DcnModel.deleteMany({});
    for (const dcn of DCNs) {
      await DcnModel.create(dcn);
    }
    console.log('DCNs carregadas!');

    await DiretrizModel.deleteMany({});
    for (const diretriz of diretrizes) {
      await DiretrizModel.create(diretriz);
    }
    console.log('Diretrizes carregadas!');

    await CompetenciaModel.deleteMany({});
    for (const competencia of competencias) {
      await CompetenciaModel.create(competencia);
    }
    console.log('Competências carregadas!');

    await CursoModel.deleteMany({});
    for (const curso of cursos) {
      await CursoModel.create(curso);
    }
    console.log('Cursos carregados!');

    await DisciplinaModel.deleteMany({});
    for (const disciplina of disciplinas) {
      await DisciplinaModel.create(disciplina);
    }
    console.log('Disciplinas carregadas!');

    await AulaModel.deleteMany({});
    for (const aula of aulas) {
      await AulaModel.create(aula);
    }
    console.log('Aulas carregadas!');

    await AtividadeModel.deleteMany({});
    for (const atividade of atividades) {
      await AtividadeModel.create(atividade);
    }
    console.log('Atividades carregadas!');

    //Carrega as disciplinas nos cursos
    for (const disciplina of disciplinas){
      for (const idCurso of disciplina.cursos){
        const curso = await CursoModel.findOne({'_id': idCurso});
        curso.disciplinas.push(disciplina);
        await CursoModel.findByIdAndUpdate({'_id': idCurso}, curso);
      } 
    }

  } catch (err) {
    console.log(err);
  } finally {
    process.exit();
  }
}

carregar();