const express = require("express");
const Router = express.Router();

//Ativa a autenticação e autorização
//const Auth = require('../auth/Auth');
//Router.use(Auth.autorizar);

const LoginRouter = require("./LoginRouter");
Router.use("/login", LoginRouter);

const AreaRouter = require("./AreaRouter");
Router.use("/areas", AreaRouter);

const LinhaRouter = require("./LinhaRouter");
Router.use("/linhas", LinhaRouter);

const AtitudeRouter = require("./AtitudeRouter");
Router.use("/atitudes", AtitudeRouter);

const AtividadeRouter = require("./AtividadeRouter");
Router.use("/atividades", AtividadeRouter);

const AulaRouter = require("./AulaRouter");
Router.use("/aulas", AulaRouter);

const BibliografiaRouter = require("./BibliografiaRouter");
Router.use("/bibliografias", BibliografiaRouter);

const CompetenciaRouter = require("./CompetenciaRouter");
Router.use("/competencias", CompetenciaRouter);

const ConteudoRouter = require("./ConteudoRouter");
Router.use("/conteudos", ConteudoRouter);

const CursoRouter = require("./CursoRouter");
Router.use("/cursos", CursoRouter);

const DcnRouter = require("./DcnRouter");
Router.use("/dcns", DcnRouter);

const DiretrizRouter = require("./DiretrizRouter");
Router.use("/diretrizes", DiretrizRouter);

const DisciplinaRouter = require("./DisciplinaRouter");
Router.use("/disciplinas", DisciplinaRouter);

const HabilidadeRouter = require("./HabilidadeRouter");
Router.use("/habilidades", HabilidadeRouter);

const PerfilEgressoRouter = require("./PerfilEgressoRouter");
Router.use("/perfisegressos", PerfilEgressoRouter);

const NivelUsuarioRouter = require("./NivelUsuarioRouter");
Router.use("/niveisusuarios", NivelUsuarioRouter);

const ProfessorRouter = require("./ProfessorRouter");
Router.use("/professores", ProfessorRouter);

const UsuarioRouter = require("./UsuarioRouter");
Router.use("/usuarios", UsuarioRouter);

module.exports = Router;
