enum enum_tcc {
  TCC1 = 1,
  TCC2
}

enum enum_titulacoes {
  DR = 1,
  ESP,
  MSC,
  POS_DR,
  ENG_AGRONOMA,
  ENG_AGRONOMO,
  GRAD, 
  VAZIO
}


enum enum_cursos {  
  CIENCIA_DA_COMPUTACAO = 1,
  AGRONOMIA,
  CIENCIAS_AERONAUTICAS,
  EGENHARIA_CIVIL,
  ENGENHARIA_DE_COMPUTACAO,
  ENGENHARIA_DE_CONTROLE_E_AUTOMACAO,
  ENGENHARIA_DE_PRODUCAO,
  ENGENHARIA_ELETRICA
}

const cursos : { [key in enum_cursos]: string } = {
  [enum_cursos.CIENCIA_DA_COMPUTACAO] : "Ciência da Computação",
  [enum_cursos.AGRONOMIA] : "Agronomia",
  [enum_cursos.CIENCIAS_AERONAUTICAS] : "Ciências Aeronáuticas",
  [enum_cursos.EGENHARIA_CIVIL] : "Engenharia Civil",
  [enum_cursos.ENGENHARIA_DE_COMPUTACAO] : "Engenharia de Computação",
  [enum_cursos.ENGENHARIA_DE_CONTROLE_E_AUTOMACAO] : "Engenharia de Controle e Automação",
  [enum_cursos.ENGENHARIA_DE_PRODUCAO] : "Engenharia de Produção",
  [enum_cursos.ENGENHARIA_ELETRICA] : "Engenharia Elétrica"  
};

const titulacoes : { [key in enum_titulacoes]: string } = {
  [enum_titulacoes.DR] : "Dr(a).",
  [enum_titulacoes.ESP] : "Esp.",
  [enum_titulacoes.MSC] : "Msc.",
  [enum_titulacoes.POS_DR] : "Pós Dr(a).",
  [enum_titulacoes.ENG_AGRONOMA] : "Eng. Agrônoma",
  [enum_titulacoes.ENG_AGRONOMO] : "Eng. Agrônomo",
  [enum_titulacoes.GRAD] : "Grad.",
  [enum_titulacoes.VAZIO] : "",
}




let TCCs = [
    {
      title: "USO DA BLOCKCHAIN PARA AUTENTICIDADE DE DOCUMENTOS t2",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ADRIANA SILVEIRA DE SOUZA",
      estudantes: "Mariana Santa Clara Campelo Zanatta", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "11/12",
      time: "09:00-10:30",
      place: "206D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "André Luiz Alves",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Juliano Lopes de Oliveira ",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "tcc aleatorio 2 - tema aleatorio2 t2",
      orientador: "jose2",
      estudante: "joao2",
      warning: "",
      date: "11/12",
      time: "10:00-11:30",
      place: "",
      bancaExaminadora: "",
      tipoTCC: enum_tcc.TCC2
    },
    {
      title: "tcc aleatorio22 - tema aleatorio t1",
      orientador: "jose22",
      estudante: "joao2",
      warning: "",
      date: "12/12",
      time: "08:00-09:30",
      place: "",
      bancaExaminadora: "",
      tipoTCC: enum_tcc.TCC1
    },
    {
      title: "tcc aleatorio 2 - tema aleatorio2 t1",
      orientador: "jose2",
      estudante: "joao2",
      warning: "",
      date: "12/12",
      time: "10:00-11:30",
      place: "",
      bancaExaminadora: "",
      tipoTCC: enum_tcc.TCC1
    },
    {
      title: "tcc aleatorio22 - tema aleatorio t2",
      orientador: "jose22",
      estudante: "joao2",
      warning: "",
      date: "13/12",
      time: "08:00-09:30",
      place: "",
      bancaExaminadora: "",
      tipoTCC: enum_tcc.TCC2
    },
    {
      title: "tcc aleatorio22 - tema aleatorio t1",
      orientador: "jose22",
      estudante: "joao2",
      warning: "",
      date: "11/12",
      time: "08:00-09:30",
      place: "",
      bancaExaminadora: "",
      tipoTCC: enum_tcc.TCC1
    },
    {
      title: "tcc aleatorio 2 - tema aleatorio2 t1",
      orientador: "jose2",
      estudante: "joao2",
      warning: "",
      date: "14/12",
      time: "10:00-11:30",
      place: "",
      bancaExaminadora: "",
      tipoTCC: enum_tcc.TCC1
    },
    {
      title: "tcc aleatorio 2 - tema aleatorio2 t2",
      orientador: "jose2",
      estudante: "joao2",
      warning: "",
      date: "14/12",
      time: "10:00-11:30",
      place: "",
      bancaExaminadora: "",
      tipoTCC: enum_tcc.TCC2
    },
    {
      title: "tcc aleatorio22 - tema aleatorio t1",
      orientador: "jose22",
      estudante: "joao2",
      warning: "",
      date: "15/12",
      time: "08:00-09:30",
      place: "",
      bancaExaminadora: "",
      tipoTCC: enum_tcc.TCC1
    },
    {
      title: "tcc aleatorio 2 - tema aleatorio2 t2",
      orientador: "jose2",
      estudante: "joao2",
      warning: "",
      date: "15/12",
      time: "10:00-11:30",
      place: "",
      bancaExaminadora: "",
      tipoTCC: enum_tcc.TCC2
    },
  ]

  
  TCCs = TCCs.sort((a, b) => {
    if(a.date < b.date) return -1;
    if(a.date > b.date) return 1;
    if(a.time < b.time) return -1;
    if(a.time > b.time) return 1;
    if(a.title < b.title) return -1;
    if(a.title > b.title) return 1;
    return 0;
  });
  
  export const apresentacoes_TCC = [
  
    {
      tccs: TCCs,
    },
    
  ]