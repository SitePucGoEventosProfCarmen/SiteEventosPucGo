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
  ARQ, 
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
  ENGENHARIA_ELETRICA,
  ARQUITETURA_E_URBANISMO
}

const cursos : { [key in enum_cursos]: string } = {
  [enum_cursos.CIENCIA_DA_COMPUTACAO] : "Ciência da Computação",
  [enum_cursos.AGRONOMIA] : "Agronomia",
  [enum_cursos.CIENCIAS_AERONAUTICAS] : "Ciências Aeronáuticas",
  [enum_cursos.EGENHARIA_CIVIL] : "Engenharia Civil",
  [enum_cursos.ENGENHARIA_DE_COMPUTACAO] : "Engenharia de Computação",
  [enum_cursos.ENGENHARIA_DE_CONTROLE_E_AUTOMACAO] : "Engenharia de Controle e Automação",
  [enum_cursos.ENGENHARIA_DE_PRODUCAO] : "Engenharia de Produção",
  [enum_cursos.ENGENHARIA_ELETRICA] : "Engenharia Elétrica",
  [enum_cursos.ARQUITETURA_E_URBANISMO] : "Arquitetura e Urbanismo"
};

const titulacoes : { [key in enum_titulacoes]: string } = {
  [enum_titulacoes.DR] : "Dr(a).",
  [enum_titulacoes.ESP] : "Esp.",
  [enum_titulacoes.MSC] : "Msc.",
  [enum_titulacoes.POS_DR] : "Pós Dr(a).",
  [enum_titulacoes.ENG_AGRONOMA] : "Eng. Agrônoma",
  [enum_titulacoes.ENG_AGRONOMO] : "Eng. Agrônomo",
  [enum_titulacoes.GRAD] : "Grad.",
  [enum_titulacoes.ARQ] : "Arq.",
  [enum_titulacoes.VAZIO] : "",
}




let TCCs = [
    {
      title: "Aplicação web para Gestão de Fidelidade",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANIBAL SANTOS JUKEMURA",
      estudantes: "LUIZ AUGUSTO VIEIRA BOSCO", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "11/12",
      time: "21:15-22:00",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "FERNANDO GONÇALVES ABADIA",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },
    {
      title: "MONITORIA DE DISCIPLINAS UTILIZANDO CLEAN ARCHITECTURE E FLUTTER",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANIBAL SANTOS JUKEMURA",
      estudantes: "WICTOR OLIVEIRA DE SOUZA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "11/12",
      time: "20:30-21:15",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "GERALDO VALERIANO RIBEIRO",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },
    {
      title: "WEBSOCKET COMO SOLUÇÃO PARA ENTREGA DE LANCES EM TEMPO REAL EM UMA APLICAÇÃO WEB DE LEILÕES",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANGELICA DA SILVA NUNES",
      estudantes: "ALUISIO LUCIO DOS SANTOS NETOA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "19:30-20:15",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Rafael Leal Martins",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },
    {
      title: "SEGURANÇA CIBERNÉTICA EM REDES SOCIAIS: SIMULAÇÃO DE ATAQUE DE ENGENHARIA SOCIAL COM CHATBOTS E ESTRATÉGIAS DE CONTRAMEDIDAS",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANGELICA DA SILVA NUNES",
      estudantes: "ALUISIO LUCIO DOS SANTOS NETOA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "20:30-21:15",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Rafael Leal Martins",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },

    {
      title: "COBERTURA E ESTABILIZAÇÃO DE TALUDES RODOVIÁRIOS",
      titulacaoOrientador: titulacoes[enum_titulacoes.POS_DR], //usar a enum e não a string literal
      orientador: "MARTA PEREIRA DA LUZ",
      estudantes: "BRUNO DA SILVA PALHARES; MARIA EDUARDA OLIVEIRA DA SILVA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "18:45-19:30",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Alessandra Carvalho",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.EGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },
    
    {
      title: "RELAÇÃO CUSTO-BENEFÍCIO DO USO DO BLOCO DE CONCRETO CELULAR AUTOCLAVADO",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "PAULO JOSE MASCARENHAS RORIZ",
      estudantes: "Gabriel Ávila Vasconcelos; Gabriel de Paula Moreira", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "09:00-09:45",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "EDSON NISHI",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.EGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },

    {
      title: "A realidade em constante deformidade: Ciência de Dados aplicada a análise de Fake News no Brasil",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANDRE LUIZ ALVES",
      estudantes: "Gustavo Dias Martins", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "14:15-15:00",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Nágela Bitar Lobo",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "Como BI e Big Data auxiliam na prevenção de fraudes e falhas em órgãos públicos",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ADRIANA SILVEIRA DE SOUZA",
      estudantes: "Matheus Gomes dos Santos Araujo", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "10:45-11:30",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Ronaldo Lopes de Oliveira",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },

    {
      title: "GERÊNCIA DE REDES COM ZABBIX EM AMBIENTE NUVEM",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANGELICA DA SILVA NUNES",
      estudantes: "PEDRO HENRIQUE RIBEIRO DANTAS", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "21:15-22:00",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Rafael Leal Martins",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "SEGURANÇA NA COMPUTAÇÃO EM NUVEM",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANGELICA DA SILVA NUNES",
      estudantes: "RAFAEL OLIVEIRA PORFIRIO", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "18:45-19:30",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Rafael Leal Martins",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "DESENVOLVIMENTO DE FERRAMENTA DE SOFTWARE PARA ANÁLISE TÉCNICA DA BOLSA DE VALORES",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANGELICA DA SILVA NUNES",
      estudantes: "CLAUDIO BERTINI BATISTA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "09:00-09:45",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Anibal Vicente Vieira",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "Ferramentas Lean na Gestão da qualidade",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "PRISCILLA BORGES DE F RODRIGUES",
      estudantes: "ERIKA PAULA MORAIS", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "17:00-17:45",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Tatiana Renata Pereira Jucá",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.EGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "Estudo de viabilidade de uma usina móvel e a logística reversa do agregado reciclado na cidade de Goiânia",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "TATIANA RENATA PEREIRA JUCA",
      estudantes: "Fabiany Cogo", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "17:45-18:30",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Priscilla Borges de F Rodrigues",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.EGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "Do Eliza ao chatGPT: História e Evolução da Inteligência Artificial",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "LUCILIA GOMES RIBEIRO",
      estudantes: "Matheus Afonso Batista da Silva", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "17:45-18:30",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Vicente Paulo de Camargo",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Solange da Silva",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "Aplicativo para auxiliar e monitorar o planejamento estratégico de organizações",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANDRE LUIZ ALVES",
      estudantes: "Pedro Henrique Albuquerque Roriz", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "09:00-09:45",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Joriver Rodrigues Canêdo",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "COMPUTAÇÃO EM NUVEM E DEVOPS NA CONSTRUÇÃO DE APLICAÇÃO WEB",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANGELICA DA SILVA NUNES",
      estudantes: "VINICIUS ELIAS DA SILVA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "09:45-10:30",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Anibal Vicente Vieira",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "ESTUDO DE CASO DE PATOLOGIA NA ENGENHARIA CIVIL EM EDIFICAÇÃO VERTICAL NA CIDADE DE GOIÂNIA",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "MARCELO TSUYOSHI HARAGUCHI",
      estudantes: "ADIMAR PRAXEDES JORGE; ARTHUR FERNANDES ALVIM", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "09:00-09:45",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "FELIPE CORREA VELOSO DOS SANTOS",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.EGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "Reconhecimento e classificação de músicas utilizando inteligência artificial",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "GUSTAVO SIQUEIRA VINHAL",
      estudantes: "CARLOS HENRIQUE DE SOUZA SILVA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "07:15-08:00",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Fernando Gonçalves Abadia",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "MONITORAMENTO DE REDES DE COMPUTADORES UTILIZANDO GRAFANA",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "SOLANGE DA SILVA",
      estudantes: "GABRIEL DE CASTRO GONÇALVES", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "19:30-20:15",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Wilmar Oliveira de Queiroz",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "Desenvolvimento do Software “Stickerz”: Um Aplicativo Para Troca de Figurinhas da Copa do Mundo",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "LUCILIA GOMES RIBEIRO",
      estudantes: "HAYANN GONÇALVES SILVA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "19:30-20:15",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Max Gontijo de Oliveira",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },

    {
      title: "Aplicação de Redes Neurais para Previsão de ações no Mercado Financeiro",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "GUSTAVO SIQUEIRA VINHAL",
      estudantes: "HENRIQUE HONORATO CRUVINEL", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "10:00-11:00",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Fernando Gonçalves Abadia",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "INTELIGÊNCIA ARTIFICIAL NO MERCADO IMOBILIÁRIO Um cenário no mercado norte-americano de 2019 a 2023",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "MARCILON FONSECA DE LIMA",
      estudantes: "Hugo Tocha Ferreira", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "18:45-19:30",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Antônio Claret de Almeida Gama Júnior",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.EGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "ENGENHARIA SOCIAL NA SEGURANÇA DA INFORMAÇÃO",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "SOLANGE DA SILVA",
      estudantes: "LEONARDO DE MOURA ALVES", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "20:30-21:15",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Fernando Abadia",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "Automação de uma indústria de fertilizantes - Estudo de caso",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "CARLOS ALBERTO VASCONCELOS BEZERRA",
      estudantes: "Leonardo Rocha Rodrigues", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "18:45-19:30",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Carlos Daniel de Sousa Bezerra",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_CONTROLE_E_AUTOMACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },

    {
      title: "Segurança e Privacidade no IoT em Ambientes de Saúde: Ajustando as Práticas à LGPD",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "SOLANGE DA SILVA",
      estudantes: "Matheus Rodrigues Tenaglia", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "18:45-19:30",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Anibal Santos Jukemura",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },

    {
      title: "Desenvolvimento e Avaliação de Métodos de Completamento de Dados Faltantes em Bases Climáticas",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "MARIA JOSE PEREIRA DANTAS",
      estudantes: "Norton Pereira Ricardo", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "20:30-21:15",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.POS_DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Marta Pereira da Luz",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "Análise de Ataques de Ransomware: Identificação e Medidas de Segurança Efetivas",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "FERNANDO GONCALVES ABADIA",
      estudantes: "Samuel Bernardes de Souza", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "09:00-09:45",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Solange da Silva",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "EFICIÊNCIA ENERGÉTICA EM TREINAMENTO DE MODELOS DE IA EM NUVEM",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "GUSTAVO SIQUEIRA VINHAL",
      estudantes: "VITOR FRANÇA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "08:00-09:00",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Fernando Gonçalves Abadia",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },

    {
      title: "Inovações na Metodologia de Dimensionamento de Pavimentos Flexíveis de Rodovias: O Método MeDiNa.",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "BENJAMIM JORGE RODRIGUES DOS SANTOS",
      estudantes: "Ana Beatriz Souza Souto", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "19:30-20:15",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Edson Nishi",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Paulo José Mascarenhas Roriz",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.EGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "PATOLOGIA DAS FUNDAÇÕES",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "PAULO SERGIO DE OLIVEIRA RESENDE",
      estudantes: "ARTHUR SIMONTON ANDRADE DE JESUS", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "18:45-19:30",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Divino Gabriel Lima Pinheiro",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.EGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "Sistema de Monitoramento de Vibrações Baseado em IA para Manutenção Preditiva",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "WANDERSON RAINER HILARIO ARAUJO",
      estudantes: "Hellora Rodrigues Souza; José Francisco Mendes Neto", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "07:15-08:00",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Fabrícia Neres Borges",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_CONTROLE_E_AUTOMACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "ESTUDO DOS PRINCIPAIS RISCOS NA ETAPA DO PLANEJAMENTO DE OBRA",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "PAULO JOSE MASCARENHAS RORIZ",
      estudantes: "HIGOR PASSOS FREIRE", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "08:00-08:45",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "VIVIANE VAZ MONTEIRO",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.EGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },

    {
      title: "Rsid aplicado ao confinamento bovino.",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "MARCELO ANTONIO ADAD DE ARAUJO",
      estudantes: "ISMAEL CARLOS DO NASCIMENTO GALVAO", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "09:00-09:45",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Carlos Alexandre Ferreira de Lima",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "PATOLOGIA DAS FUNDAÇÕES",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "PAULO SERGIO DE OLIVEIRA RESENDE",
      estudantes: "JOSÉ AUGUSTO FAUSTINO DE OLIVEIRA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "18:45-19:30",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Divino Gabriel de Lima Pinheiro",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.EGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },

    {
      title: "Otimização da Aplicação de Adubo Foliar no Agronegócio: Um Estudo de Viabilidade da Programação Linear para Redução de Custos",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "ANTONIO MARCOS MELO MEDEIROS",
      estudantes: "Matheus Dias Barros", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "16/12",
      time: "09:00-09:45",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "BRUNO QUIRINO DE OLIVEIRA",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "MARCOS ANTONIO DE SOUSA",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },



    /*                FIM DE TCC 1 E COMEÇO DE TCC 2
    ========================================================================
    ========================================================================
    ========================================================================
    ========================================================================
    ========================================================================
    
    
    */

    {
      title: "Connect Hub - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Fernando Henrique B. Marques",
      estudantes: "Júlia Netto Medeiros", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "07:30",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: " Deusa M.Rodrigues Boaventura",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Fernando Carlos Rabelo",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Simone Buiate Brandão", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Parque Amazônia, um Bairro Eldorado. Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Maria Ester de Souza",
      estudantes: "Larissa de Freitas Gerais", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "08:15",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: " Deusa M.Rodrigues Boaventura",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Fernando Carlos Rabelo",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Simone Buiate Brandão", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },

    {
      title: "Moradia Estudantil - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Fernando Henrique B. Marques",
      estudantes: "Pietra Neto Teles de Paula", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "09:00",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: " Deusa M.Rodrigues Boaventura",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Fernando Carlos Rabelo",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Simone Buiate Brandão", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Complexo Hoteleiro em Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Maria Ester de Souza",
      estudantes: "Marcos Paulo de Carvalho Cardoso", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "07:30",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Jesus Henrique Cheregati",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Antônio Fernando Banon Simon",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Ana Flávia Rêgo Mota", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Centro de bem-estar para cães e gatos - Goiânia- GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Fernando Henrique B. Marques",
      estudantes: "Arthur Gonçalves Borba", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "08:15",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Jesus Henrique Cheregati",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Antônio Fernando Banon Simon",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Ana Flávia Rêgo Mota", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "(Des)Fragmentar com mobilidade: intervenção Urbana em Senador Canedo - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Maria Ester de Souza",
      estudantes: "Nathália Aureliano Lopes ", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "09:00",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Jesus Henrique Cheregati",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Antônio Fernando Banon Simon",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Ana Flávia Rêgo Mota", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Transcender - Centro de Acolhimento e Apoio LGBTQIA+ - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Fernando Henrique B. Marques",
      estudantes: "Thyago Henrique Cardoso B. Borges", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "09:45",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Jesus Henrique Cheregati",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Antônio Fernando Banon Simon",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Ana Flávia Rêgo Mota", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "CRIEC - Centro de Referência em Inovação e Empreendedorismo Criativo em Goiânia. Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Mírian de Paula R. Belo",
      estudantes: "Melquisedeque Alves Tibúrcio ", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "13:30",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Isabela Paiva Gomes Ferrante",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Roberto Cintra Campos",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Fernando Antônio Oliveira Mello", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Guia de Plano de Bairro para a população de Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Sandra Catharinne P. Resende",
      estudantes: "Camilla Duarte Viana", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "14:15",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Isabela Paiva Gomes Ferrante",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Roberto Cintra Campos",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Fernando Antônio Oliveira Mello", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Centro de Tratamento Psiquiátrico Bieno - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Mírian de Paula R. Belo",
      estudantes: "Natália Siqueira Gonçalves Ferreira", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "15:00",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Isabela Paiva Gomes Ferrante",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Roberto Cintra Campos",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Fernando Antônio Oliveira Mello", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Circuito Turístico da Região das Serras Gerais do Tocantins - Taguatinga - TO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Frederico André Rabelo",
      estudantes: "Bethânia Chaves de Almeida Souza", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "15:45",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Isabela Paiva Gomes Ferrante",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Roberto Cintra Campos",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Fernando Antônio Oliveira Mello", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Cicatriz Urbana: intervenção urbana paisagística nos córregos do perímetro urbano de Mineiros - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Frederico André Rabelo",
      estudantes: "Lanyerre Oliveira Castro", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "13:30",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Maria Eliana Jubé Ribeiro",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Ana Paula de Oliveira Zimmermann",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Thalita Pereira da Fonseca", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Complexo de pesquisa e produção de vacinas do Estado de Goiás - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Camilla Pompêo de C. e Silva",
      estudantes: "Lucas Gomes Santana", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "14:15",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Maria Eliana Jubé Ribeiro",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Ana Paula de Oliveira Zimmermann",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Thalita Pereira da Fonseca", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Tiny House: uma habitação móvel sustentável",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Frederico André Rabelo",
      estudantes: "Victor da Rocha Fernandes de Oliveira", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "15:00",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Maria Eliana Jubé Ribeiro",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Ana Paula de Oliveira Zimmermann",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Thalita Pereira da Fonseca", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "SESC Jóquei Clube de Goiás - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Camilla Pompêo de C. e Silva",
      estudantes: "Guilherme Rocha de Oliveira Gonçalves", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "15:45",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Maria Eliana Jubé Ribeiro",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Ana Paula de Oliveira Zimmermann",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Thalita Pereira da Fonseca", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },

    {
      title: "Requalificação de praças: Córrego Calção de Couro- Goianésia-GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Elaine Neves da Silva",
      estudantes: "Thiago Felipe de Magalhães Silva", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "18:00",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Daniel Dias Pimentel",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Pedro Batista dos Santos",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Manoel Balbino Carvalho", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Florescer: Centro de Educação Infantil - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Fernando Henrique B. Marques",
      estudantes: "Isabella de Almeida Castro", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "18:45",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Daniel Dias Pimentel",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Pedro Batista dos Santos",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Manoel Balbino Carvalho", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Hotel Executivo - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Elaine Neves da Silva",
      estudantes: "Rodolfo Machado Pacheco Pereira", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "19:30",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Daniel Dias Pimentel",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Pedro Batista dos Santos",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Manoel Balbino Carvalho", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Centro de Convívio para idosos em Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Fernando Henrique B. Marques",
      estudantes: "Thays Galvão Batista", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "20:15",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Daniel Dias Pimentel",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Pedro Batista dos Santos",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Manoel Balbino Carvalho", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Requalificar na Orla de Aruanã. Aruanã - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Mírian de Paula R. Belo",
      estudantes: "Verônica Gomes da Silveira", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "18:00",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "José Renato de Castro e Silva",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Guilherme de Andrade Bento",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Maurício Telles Alves da Costa", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Centro de Convívio Intergeracional - Jovens e Idosos - Goiânia-GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Elaine Neves da Silva",
      estudantes: "Beatriz de Carvalho Carrazzoni", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "18:45",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "José Renato de Castro e Silva",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Guilherme de Andrade Bento",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Maurício Telles Alves da Costa", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Museu Contemporâneo de Arte Urbana. Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Mírian de Paula R. Belo",
      estudantes: "Jeferson Sales Torres Lima Santos", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "19:30",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "José Renato de Castro e Silva",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Guilherme de Andrade Bento",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Maurício Telles Alves da Costa", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Reurbanização do Córrego Pontilhão - Palmeiras de Goiás",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Elaine Neves da Silva",
      estudantes: "Hugo Pereira", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "20:15",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "José Renato de Castro e Silva",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Guilherme de Andrade Bento",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Maurício Telles Alves da Costa", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Memorial Césio - 137 - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Camilla Pompêo de C. e Silva",
      estudantes: "Jaqueline Ramos Arantes", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "07:30",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Adriana de Oliveira Bernardi",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Luciana Carvalho C. Japiassu",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Rangel Henrique Brandão Silva", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Centro de Ensino para Surdos - Goiânia-GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Sandra Catharinne P. Resende",
      estudantes: "Lyndon Johnson Rodrigues Silva Junior", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "08:15",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Adriana de Oliveira Bernardi",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Luciana Carvalho C. Japiassu",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Rangel Henrique Brandão Silva", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Aeroporto de Catalão-GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Sandra Catharinne P. Resende",
      estudantes: "Luana Rodrigues Tomazett", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "09:00",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Adriana de Oliveira Bernardi",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Luciana Carvalho C. Japiassu",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Rangel Henrique Brandão Silva", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "(Re)ocupar: guia para intervenção em loteamentos irregulares",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Camilla Pompêo de C. e Silva",
      estudantes: "Bruna do Carmo Perotto", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "09:45",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Adriana de Oliveira Bernardi",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Luciana Carvalho C. Japiassu",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Rangel Henrique Brandão Silva", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "EDUCART - Centro de Dança. Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Mírian de Paula R. Belo",
      estudantes: "Narayanna Ribeiro Pinheiro", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "07:30",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Mirci Kuramoto Nucada",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Alessandro Miguel de Oliveira",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Pedro Henrique Máximo Pereira", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Hidro: um bioparque em uma hidrelétrica em ruínas - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Camilla Pompêo de C. e Silva",
      estudantes: "Matheus de Oliveira Santana", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "08:15",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Mirci Kuramoto Nucada",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Alessandro Miguel de Oliveira",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Pedro Henrique Máximo Pereira", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Parque Linear e Centro Comercial Aberto - Piracanjuba - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Mírian de Paula R. Belo",
      estudantes: "Hevelin Borges Duarte", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "09:00",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Mirci Kuramoto Nucada",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Alessandro Miguel de Oliveira",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Pedro Henrique Máximo Pereira", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Abrigo para crianças e adolescentes KOA - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Sandra Catharinne P. Resende",
      estudantes: "Ana Clara Spadeto Aires", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "09:45",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Mirci Kuramoto Nucada",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Alessandro Miguel de Oliveira",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Pedro Henrique Máximo Pereira", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Reabilitação Urbana no Centro de Goiânia: Circuito histórico cultural no Centro - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Sandra Catharinne P. Resende",
      estudantes: "Júlia Souza Abdallah Mynssen", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "13:30",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Marcelo Granato de Araújo",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Ênio Nery Oliveira",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Christine Ramos Mahler", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Requalificação do Centro de Esporte e Lazer Antônio Nélio Lopes Valadão - Goiatuba- GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Frederico André Rabelo",
      estudantes: "Therena Maria de Sousa Silva", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "14:15",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Marcelo Granato de Araújo",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Ênio Nery Oliveira",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Christine Ramos Mahler", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Centro de Arterapia Flora - apoio a pessoas com TEA e TDAH - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Sandra Catharinne P. Resende",
      estudantes: "Beatriz de Oliveira", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "15:00",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Marcelo Granato de Araújo",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Ênio Nery Oliveira",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Christine Ramos Mahler", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Sala Goiás: sede da Orquestra Filarmônica de Goiás - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Frederico André Rabelo",
      estudantes: "Ídila Ferreira Borges", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "15:45",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Marcelo Granato de Araújo",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Ênio Nery Oliveira",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Christine Ramos Mahler", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Gestar: fundação de acolhimento à gestante - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Frederico André Rabelo",
      estudantes: "Luana de Sousa Nunes", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "13:30",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Diogo Antônio da Paixão",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Carlos Roberto da Costa",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.ARQ], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Vítor Cavalcanti Garcia", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Intervenção Urbana no Setor Sul: sistema de espaços livres de uso público. Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Sandra Catharinne P. Resende",
      estudantes: "Júlia Alves Ferreira", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "14:15",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Diogo Antônio da Paixão",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Carlos Roberto da Costa",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.ARQ], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Vítor Cavalcanti Garcia", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Habitação Estudantil - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Frederico André Rabelo",
      estudantes: "Ana Beatriz Carvalho Soares", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "15:00",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Diogo Antônio da Paixão",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Carlos Roberto da Costa",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.ARQ], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Vítor Cavalcanti Garcia", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Intervenção Urbana no bairro Campinas. Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Maria Ester de Souza",
      estudantes: "Laíssa Eduarda M de Oliveira", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "15:45",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Diogo Antônio da Paixão",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Carlos Roberto da Costa",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.ARQ], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Vítor Cavalcanti Garcia", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Parque Cultural SETE ARTES - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Maria Ester de Souza",
      estudantes: "Isadora Vieira Frota", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "18:00",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Leônidas Albano da Silva Júnior",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Evelyn Cristine Moreira Soares",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Eurípedes Afonso da Silva Neto", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Centro Hípico-Equoterápico - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Maria Ester de Souza",
      estudantes: "Maria Antônia Pereira Freire", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "18:45",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Leônidas Albano da Silva Júnior",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Evelyn Cristine Moreira Soares",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Eurípedes Afonso da Silva Neto", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Centro de Cultura e Artes em Goiânia – GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Sandra Catharinne P. Resende",
      estudantes: "Mila Fonseca Apolinário", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "19:30",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Leônidas Albano da Silva Júnior",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Evelyn Cristine Moreira Soares",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Eurípedes Afonso da Silva Neto", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Complexo Welness . Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Maria Ester de Souza",
      estudantes: "Júlia Rezende Saddi", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "20:15",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Leônidas Albano da Silva Júnior",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Evelyn Cristine Moreira Soares",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Eurípedes Afonso da Silva Neto", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
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