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
  ENGENHARIA_CIVIL,
  ENGENHARIA_DE_COMPUTACAO,
  ENGENHARIA_DE_CONTROLE_E_AUTOMACAO,
  ENGENHARIA_DE_PRODUCAO,
  ENGENHARIA_ELETRICA
}

const cursos : { [key in enum_cursos]: string } = {
  [enum_cursos.CIENCIA_DA_COMPUTACAO] : "Ciência da Computação",
  [enum_cursos.AGRONOMIA] : "Agronomia",
  [enum_cursos.CIENCIAS_AERONAUTICAS] : "Ciências Aeronáuticas",
  [enum_cursos.ENGENHARIA_CIVIL] : "Engenharia Civil",
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
      estudantes: "Gustavo Toledo de Souza", //se tiver mais de 1, separar por ;
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
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "A percepção de profissionais de software sobre segurança em banco de dados",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ADRIANA SILVEIRA DE SOUZA",
      estudantes: "Mariana Santa Clara Campelo Zanatta", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "11/12",
      time: "18:00-19:30",
      place: "205D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Solange Silva",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Juliano Lopes de Oliveira",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "ANÁLISE COMPARATIVA ENTRE OS MODELOS: MPS.BR (MELHORIA DE PROCESSOS DE SOFTWARE BRASILEIRO) RH e P-CMM (PEOPLE CAPABILITY MATURITY MODEL)	",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ADRIANA SILVEIRA DE SOUZA",
      estudantes: "ROMÁRIO EDUARDO DE ALMEIDA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "07:15-08:45",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Solange Silva",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Marco Aurelio de Souza Mangan",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Desenvolvimento de um sistema web para avaliação abrangente de competências em engenharia de software",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ADRIANA SILVEIRA DE SOUZA",
      estudantes: "JHEOVANNY CAMPOS DE SOUZA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "17:00-18:30",
      place: "205D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Joriver Canedo",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Juliano Lopes de Oliveira",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Análise de Guia de Validação de Sistemas da Anvisa pelo Processo de Validação da Norma 12207",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ADRIANA SILVEIRA DE SOUZA",
      estudantes: "Clysman Samuel Lima Cipriano", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "09:00-10:30",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "André Luiz Alves",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Juliano Lopes de Oliveira",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Sistema construtivo em painéis monolíticos de poliestireno expandido (EPS) em casa residenciais - Estudo de caso ",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ADRIANE BORGES DE PAULA COUTO",
      estudantes: "Raquel Cristina; LORENA CARVALHO PADILHA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "11/12",
      time: "07:15-08:45",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Edson Nishi ",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Rosana Melo de Lucas Brandão ",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Sistema construtivo em painéis monolíticos de poliestireno expandido (EPS) em casa residenciais - Estudo de caso ",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ADRIANE BORGES DE PAULA COUTO",
      estudantes: "CAROLINE TELES PINHEIRO; André Alves Bueno ", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "07:15-08:45",
      place: "206D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Paulo José Mascarenhas Roriz ",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Edson Nishi ",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Sistema construtivo em light steel frame - método engenheirado, em obras civis ",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ADRIANE BORGES DE PAULA COUTO",
      estudantes: "Victor Ataídes Freitas; Fidelis Porto Palhares ", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "07:15-08:45",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Paulo José Mascarenhas Roriz ",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Edson Nishi ",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "HIBRIDIZAÇÃO ENTRE A OTIMIZAÇÃO DE COLÔNIA DE FORMIGAS E RECOZIMENTO SIMULADO PARA O PROBLEMA DE ROTEAMENTO E LOCALIZAÇÃO DO SISTEMA DE VEÍCULOS ELÉTRICOS AUTÔNOMOS COMPARTILHADOS",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ALEXANDRE RIBEIRO",
      estudantes: "Vitor Antonio Pimenta Silva", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "20:30-22:00",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Maria José Pereira Dantas",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Max de Oliveira Gontijo",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Desenvolvimento de um aplicativo para apoiar pessoas com TDAH",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANDRE LUIZ ALVES",
      estudantes: "Douglas Soares de Souza Ferreira", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "09:00-10:30",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Fabrício Schlag",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Vicente Pulo de Camargo",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Projeto de Software utilizando Flutter",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANDRE LUIZ ALVES",
      estudantes: "Marcel Douglas Cirqueira Castro", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "07:15-08:45",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Joriver Rodrigues Canêdo",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Vicente Paulo de Camargo",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Aplicação de Ciências de Dados no Setor Financeiro",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANDRE LUIZ ALVES",
      estudantes: "Gabriel Soares Ribeiro", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "07:15-08:45",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Fabrício Schlag",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Nágela Bitar Lobo",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Roadmap de Infraestrutura para a Transformação Digital",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANDRE LUIZ ALVES",
      estudantes: "João Victor Nunes de Melo", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "10:45-12:15",
      place: "Sala de reuniões da DTI, área IV",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Dinailton José da Silva",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Elias Batista Ferreira",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Desenvolvimento Web do Site M2: Catálogo Online para a Empresa Mattia Móveis",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANDRE LUIZ ALVES",
      estudantes: "Heverton Thyago Barbosa", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "09:00-10:30",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Fabrício Schlag",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Vicente Paulo de Camargo",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Automatização de Processos Organizacionais: Desenvolvimento e Implementação de uma Solução RPA",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANDRE LUIZ ALVES",
      estudantes: "Yves Yuji Carvalho Monma", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "10:45-12:15",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Fabrício Schlag",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Vicente Paulo de Camargo",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "UTILIZAÇÃO DA VPN NO CENÁRIO DE TELETRABALHO",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANGELICA DA SILVA NUNES",
      estudantes: "ISABELLA ALVES CARVALHO", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "07:15-08:45",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Wilmar Oliveira de Queiroz",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Rafael Leal Martins",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "SISTEMA DE RECOMENDAÇÃO DE LIVROS ATRAVÉS DO ALGORITMO ALS(ALTERNATIVE LEAST SQUARES)",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANIBAL SANTOS JUKEMURA",
      estudantes: "Hiago Laurenço Donha", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "20:30-22:00",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "LUCÍLIA GOMES RIBEIRO",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "FERNANDO GONÇALVES ABADIA",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Aplicação Low Code Web para Controle De Ações ",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANIBAL SANTOS JUKEMURA",
      estudantes: "Alexssander Pereira de Morais", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "18:45-20:15",
      place: "205D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Vicente Paulo de Camargo",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Solange da Silva",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "DESENVOLVIMENTO DE UM APLICATIVO PARA GESTÃO DE PEQUENAS PROPRIEDADES RURAIS",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANIBAL SANTOS JUKEMURA",
      estudantes: "JOÃO AUGUSTO BATISTA CAMARGO", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "18:45-20:15",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "SOLANGE DA SILVA",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "RAFAEL LEAL MARTINS",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "A RELEVÂNCIA DAS ESTRATÉGIAS DE MARKETING PARA A AVIAÇÃO ",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "ANNA PAULA BECHEPECHE",
      estudantes: "Jaime Batista da Silva Sobrinho", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "11/12",
      time: "07:15-08:45",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Paulo José Gonzaga Ribeiro",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Tammyse Araújo da Silva",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "OS BIOCOMBUSTÍVEIS E A INOVAÇÃO DE RUPTURA NA AVIAÇÃO CIVIL ",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "ANNA PAULA BECHEPECHE",
      estudantes: "Nathan Santana do Couto Souza", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "11/12",
      time: "09:00-10:30",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: " Ycarim Melgaço Barbosa",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Paulo José Gonzaga Ribeiro",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "A IMPORTÂNCIA DA QUALIDADE NA MANUTENÇÃO PREVENTIVA NA AVIAÇÃO CIVIL",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "ANNA PAULA BECHEPECHE",
      estudantes: "AURÉLIO AUGUSTO GOULART SOARES", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "10:45-12:15",
      place: "206D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Andréluiz da Silva Fernandes",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Salmen Chaquip Bukzem",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Monitoramento Ambiental Com Veículos Operados Remotamente",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "ANTONIO MARCOS MELO MEDEIROS",
      estudantes: "MARCOS VINICIUS XAVIER GUIMARÃES SILVA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "09:00-10:30",
      place: "205D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Bruno Quirino de Oliveira",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Carlos Alexandre Ferreira de Lima ",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "IMPLEMENTAÇÃO E APLICAÇÃO DE UMA REDE NEURAL EM UM FPGA PARA AGRICULTURA",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "ANTONIO MARCOS MELO MEDEIROS",
      estudantes: "NERCILIO ANTONIO URIAS CAVALCANTE JUNIOR", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "10:45-12:15",
      place: "205D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Bruno de Quirino de Oliveira ",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "LUIS FERNANDO PAGOTTI",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "BIOINFORMATICA E A UTILIZAÇÃO DA GENETICA NA AGRICUTLURA",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "ANTONIO MARCOS MELO MEDEIROS",
      estudantes: "Gabriel Henrique Lima Picouto", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "09:00-10:30",
      place: "206D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Bruno Quirino de Oliveira ",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "MARCOS ANTONIO DE SOUSA ",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "DESENVOLVIMENTO DE PLACA DE CIRCUITO IMPRESSO BIODEGRADÁVEL COM LAMINADO TERMOPLÁSTICO RECICLADO UTILIZANDO MANUFATURA ADITIVA",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "ANTONIO MARCOS MELO MEDEIROS",
      estudantes: "LUIZ HEITOR DIMITRI REIS DE DAMACENA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "10:45-12:15",
      place: "206D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "BRUNO QUIRINO DE OLIVEIRA",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "DANNS PEREIRA BARBOSA",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_ELETRICA], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Digitalização na Indústria 4.0 - Aplicação do protocolo OPC UA na digitalização de fábricas",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "CARLOS ALBERTO VASCONCELOS BEZERRA",
      estudantes: "Gabriel Sales Mendes da Silva", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "10:45-12:15",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Carlos Daniel de Sousa Bezerra",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Luis Fernando Pagotti",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_ELETRICA], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "CLASSIFICAÇÃO DE TIPOS DE BANANAS UTILIZANDO IMAGENS HIPERESPECTRAIS E REDES NEURAIS PERCEPTRON MUTICAMADA",
      titulacaoOrientador: titulacoes[enum_titulacoes.POS_DR], //usar a enum e não a string literal
      orientador: "CLARIMAR JOSE COELHO",
      estudantes: "MANOELLA CRISTYNA BORGES MATIAS", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "15:15-16:45",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.POS_DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Rafael Viana de Carvalho",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.GRAD], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Walcy Junior Rios",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "DIAGNÓSTICO MÉDICO USANDO RACIOCÍNIO BASEADO EM CASOS E APRENDIZAGEM DE MÁQUINA",
      titulacaoOrientador: titulacoes[enum_titulacoes.POS_DR], //usar a enum e não a string literal
      orientador: "CLARIMAR JOSE COELHO",
      estudantes: "ALISSON VIANA DE ANDRADE", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "17:00-18:30",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.POS_DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Rafael Viana de Carvalho",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.GRAD], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Walcy Junior Rios",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Levantamento e caracterização dos erros técnicos praticados por engenheiros civis",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "EDSON NISHI",
      estudantes: "Gabriela Guedes Miranda; Hyollanda Cantuária Santos ", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "07:15-08:45",
      place: "206D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Marta Pereira da luz",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Adriane Borges de Paula  Couto",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Rosana Melo  de Lucas Brandão ", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Avaliação de propriedades de argamassa industrializada utilizada em alvenaria estrutural em empreendimentos na cidade de Goiânia.",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "EPAMINONDAS LUIZ FERREIRA JUNIOR",
      estudantes: "Ana Eugênia Barbosa Faleiro; Cindy Ohanna da Cruz Maciel", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "18:45-20:15",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Paulo Sérgio de Oliveira Resende",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Murilo Meiron de Pádua Soares",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Análise da execução de serviços de impermeabilização em um empreendimento na cidade de Goiânia.",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "EPAMINONDAS LUIZ FERREIRA JUNIOR",
      estudantes: "Brenda Peixoto de Alencar Santiago", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "09:00-10:30",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Rosana Melo de Lucas Brandão",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Adriane Borges de Paula Couto",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Arquitetura de Software",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "EUGENIO JULIO M C CARVALHO",
      estudantes: "LIANDRA DE OLIVEIRA LOPES", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "10:45-12:15",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Daniel Correa da Silva",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "OLEGARIO CORREA DA SILVA NETO",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "SOLIDARIZE: Aplcação WEB para busca de organizações não-governamentais",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "FERNANDO GONCALVES ABADIA",
      estudantes: "Gabriel Torres Bahia", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "20:30-22:00",
      place: "206D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Rafael Leal Martins",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Anibal Santos Jukemura",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "SISTEMA DE CONTROLE DE TEMPERATURA PARA CHURRASQUEIRA",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "GUSTAVO SIQUEIRA VINHAL",
      estudantes: "MARCUS VINICIUS DE SOUZA SANTOS", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "10:45-12:15",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Fernando Gonçalves Abadia",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Rafael Leal Martins",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "A INFLUÊNCIA DA INTELIGÊNCIA ARTIFICIAL NO SETOR DE NEGÓCIOS",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "GUSTAVO SIQUEIRA VINHAL",
      estudantes: "FERNANDO CARLOS PEREIRA JUNIOR", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "09:00-10:30",
      place: "205D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Nilson Cardoso Amaral",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Rafael Leal Martins",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "DESAFIOS NA WEB3: RISCOS E VULNERABILIDADES",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "GUSTAVO SIQUEIRA VINHAL",
      estudantes: "Gustavo Miranda de Souza", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "10:45-12:15",
      place: "205D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Ana Flávia Marinho de Lima Garrote",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Rafael Leal Martins",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "BUSINESS INTELLIGENCE E GESTÃO DE NEGÓCIO: ESTUDO DE CASO SOBRE A APLICAÇÃO DE BUSINESS INTELLIGENCE NA OBTENÇÃO DE INFORMAÇÕES",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "GUSTAVO SIQUEIRA VINHAL",
      estudantes: "FELIPE ANDRADE DE PAIVA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "13:30-15:00",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Ana Flavia Marinho de Lima Garrote",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Rafael Leal Martins",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Análise de dados de incidentes e acidentes aéreos relacionada conflitos de pista;",
      titulacaoOrientador: titulacoes[enum_titulacoes.POS_DR], //usar a enum e não a string literal
      orientador: "HUMBERTO CESAR MACHADO",
      estudantes: "Arthur Fernandes Monteiro", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "11/12",
      time: "09:00-10:30",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Fabrício Schilag",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Carlos Henrique Linares",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "A segurança de voo e seus aspectos comportamentais e neuropsicológicos na operação aérea",
      titulacaoOrientador: titulacoes[enum_titulacoes.POS_DR], //usar a enum e não a string literal
      orientador: "HUMBERTO CESAR MACHADO",
      estudantes: "João Francisco de Souza Oliveira Filho", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "11/12",
      time: "10:45-12:15",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Fabrício Schilag",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Carlos Henrique Linares",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "OS DESCOMPASSOS JURÍDICOS ENTRE CONSUMIDOR, COMPANHIAS AEREAS E A LEGISLAÇÃO REGULAMENTAR",
      titulacaoOrientador: titulacoes[enum_titulacoes.POS_DR], //usar a enum e não a string literal
      orientador: "HUMBERTO CESAR MACHADO",
      estudantes: "Moacir Antônio Guimarães Bragança", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "11/12",
      time: "13:30-15:00",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Carlos Henrique Linares",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Cinthya Amaral Santos",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "EXPLORANDO O DESENVOLVIMENTO FRONT-END: UM ESTUDO DE CASO EM CATÁLOGO DE FILMES ",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "JOSÉ LUIZ DE FREITAS JÚNIOR",
      estudantes: "TAYNÁ RODRIGUES DE SOUSA CARVALHO", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "09:00-10:30",
      place: "205D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "MARCIO GIOVANE CUNHA FERNANDES (UEG)",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "EUGÊNIO JÚLIO MESSALA CÂNDIDO CARVALHO",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Desenvolvimento de uma Aplicação Web para Controle de Tarefas na Área de Suporte de TI ",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "JOSÉ LUIZ DE FREITAS JÚNIOR",
      estudantes: "HIAGHO JUNIO GOMES OLIVEIRA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "10:45-12:15",
      place: "205D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "MARCIO GIOVANE CUNHA FERNANDES (UEG)",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "EUGÊNIO JÚLIO MESSALA CÂNDIDO CARVALHO",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "SISTEMA EMBARCADO DE CONTROLE DE NAVEGAÇÃO TERRESTRE",
      titulacaoOrientador: titulacoes[enum_titulacoes.POS_DR], //usar a enum e não a string literal
      orientador: "LEONARDO GUERRA DE REZENDE GUEDES",
      estudantes: "GABRIEL PAZ DE PAULA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "09:00-10:30",
      place: "206D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "EUGENIO JULIO MESSALA CANDIDO CARVALHO",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "PEDRO ARAUJO VALE",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Sistema para controle e monitoramento de energia elétrica residencial",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "LUDMILLA REIS PINHEIRO DOS SANTOS",
      estudantes: "ERICK RIAN BARBOSA DE SOUSA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "10:45-12:15",
      place: "206D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "MARCELO ANTONIO ADAD DE ARAUJO",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "FERNANDO GONÇALVES ABADIA",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Estudo de Caso de Viabilidade de Entrada no Mercado Livre de Energia para Consumidor com Demanda Inferior a 500kW",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "LUIS FERNANDO PAGOTTI",
      estudantes: "KAIO LEONARDO OLIVEIRA ROSA; VINICIUS SOUZA MAGALHÃES", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "10:45-12:15",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Bruno Quirino de Oliveira",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Antonio Marcos Melo Medeiros",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_ELETRICA], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Implantação de firewall em Raspberry Pi",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "MARCELO ANTONIO ADAD DE ARAUJOMARCELO ANTONIO ADAD DE ARAUJO",
      estudantes: "Hebert Cordeiro De Souza", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "07:15-08:45",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Carlos Alexandre Ferreira de Lima",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Nilson Cardoso Amaral",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Controle Inteligente deTráfego Terrestre: Uma revisão literária",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "MARCELO ANTONIO ADAD DE ARAUJO",
      estudantes: "Huggo Campos da Silva", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "10:45-12:15",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Carlos Alexandre Ferreira de Lima",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Nilson Cardoso Amaral",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Estudo da viabilidade de reúso de água cinza proveniente da máquina de lavar roupas.",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "MARCELUS ISAAC LEMOS GOMES",
      estudantes: "Lucas Gonçalves Canedo", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "09:00-10:30",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Viviane Vaz Monteiro.",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Paulo José Mascarenhas Roriz.",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "REDES NEURAIS APLICADAS NA CLASSIFICAÇÃO DE DISTÚRBIOS DA REDE ELÉTRICA",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "MARCOS ANTONIO DE SOUSA",
      estudantes: "Matheus Felipe da Silva Mariano; Victor Pinheiro Borges", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "09:00-10:30",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Luís Fernando Pagotti ",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Bruno Quirino de Oliveira ",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_CONTROLE_E_AUTOMACAO + ";" + enum_cursos.ENGENHARIA_ELETRICA], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Análise Comparativa de Fundações sob Influência de Diferentes Tipos de Solo e a Importância da Sondagem – Um estudo de Caso",
      titulacaoOrientador: titulacoes[enum_titulacoes.POS_DR], //usar a enum e não a string literal
      orientador: "MARTA PEREIRA DA LUZ",
      estudantes: "Jhordan Henrique Carvalho Silva", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "18:45-20:15",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "MURILO MEIRON",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "FLÁVIO LEAL DA CUNHA",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Emprego de Técnicas e Algoritmos para o Desenvolvimento de Jogos de Terror Realistas",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "MAX GONTIJO DE OLIVEIRA",
      estudantes: "GABRIEL HÚGLIO PINELI SIMÕES", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "18:45-20:15",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Fernando Gonçalves Abadia",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Rafael Leal Martins",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Comparativo de custos de alvenaria estrutural e vedação para casas populares",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "Murilo Meiron de P. Soares",
      estudantes: "Ernani Vaz Carneiro; Watson Kalley Alves dos Santos", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "17:00-18:30",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Luciano Caetano do Carmo",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "José Elmo",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "BIOCONCRETO: AUTO RECUPERAÇÃO DE PATOLOGIAS DO CONCRETO ESTRUTURAL",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "PAULO JOSE MASCARENHAS RORIZ",
      estudantes: "Maria Alicia Pereira Morais; Sabrina Ferreira Gonçalves", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "09:00-10:30",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "EDSON NISHI",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "MARCELUS ISAAC LEMOS GOMES",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "CONDICIONAMENTOS DE USO DO DRYWALL EM EDIFICAÇÕES VERTICAIS",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "PAULO JOSE MASCARENHAS RORIZ",
      estudantes: "Gabriel Vantuille de Godoy Freitas; Gabriel Carvalho Desidério Protasio", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "10:45-12:15",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "EDSON NISHI",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "MARCELUS ISAAC LEMOS GOMES",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Logística de suprimentos na construção civil: Impactos em obras distantes dos grandes centros urbanos no estado de Goiás – Estudo de caso. ",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "PAULO SERGIO DE OLIVEIRA RESENDE",
      estudantes: "Lucas Gonçalves de Oliveira", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "20:30-22:00",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Epaminondas Luiz Ferreira Junior",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Murilo Meiron de Pádua Soares",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Lean Construction - Uso da Ferramenta A3 Para Melhoria Contínua",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "PRISCILLA BORGES DE F RODRIGUES",
      estudantes: "KAICK BARCELOS DOSSA; WARLEY DANIEL DA SILVA FERNANDES", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "18:45-20:15",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Erika Sakai",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Tatiana Renata Pereira Jucá",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Análise Comparativa da Viabilidade da Implementação de Usinas Fotovoltaicas de até 6000 kWh após a Implementação da Lei 14.300: Um Estudo de Transição Energética Sustentável",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "RICARDO VITOY",
      estudantes: "SHAMIR QUEIROZ ROSADO ", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "13:30-15:00",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Vitor Hugo Martins e Resende",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Vinícius Carvalhaes ",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_PRODUCAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "ANÁLISE DAS PROPRIEDADES FÍSICAS DO CONCRETO NÃO ESTRUTURAL EM MISTURAS UTILIZANDO REÍDUOS DE VIDRO E PLÁSTICO PET",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "RODRIGO MARTINEZ CASTRO",
      estudantes: "ANNA CAROLINA SEVERO; LETHÍCIA PEREIRA E SILVA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "17:00-18:30",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Murilo Meiron de P. Soares",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Marta Pereira da Luz",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "APLICAÇÃO DO CHATGPT NA GERAÇÃO DE SENTENÇAS JUDICIAIS",
      titulacaoOrientador: titulacoes[enum_titulacoes.POS_DR], //usar a enum e não a string literal
      orientador: "SIBELIUS LELLIS VIEIRA",
      estudantes: "Caio de Paula Milhomem Santos", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "07:15-08:45",
      place: "205D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Gustavo Siqueira Vinhal",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Fernando Gonçalves Abadia",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "USO DAS NORMAS NBR ISO/IEC 27017 E 27018 PARA GARANTIR A SEGURANÇA DA COMPUTAÇÃO EM NUVEM ",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "SOLANGE DA SILVA",
      estudantes: "HIANKA RODRIGUES SOUZA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "11/12",
      time: "09:00-10:30",
      place: "205D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Gustavo Vinhal",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Fernando Abadia",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "SEGURANÇA DE REDES DE COMPUTADORES: UM ESTUDO SOBRE O ENDIAN FIREWALL ",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "SOLANGE DA SILVA",
      estudantes: "JOSÉ RODRIGO DA FONSECA GOMES ", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "11/12",
      time: "10:45-12:15",
      place: "205D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Wilmar de oliveira Queiroz",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Rafael Leal Martins",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "MELHORIA DO TRÂNSITO URBANO USANDO AUTOMAÇÃO DE VEÍCULOS ATRAVÉS DA INTELIGÊNCIA ARTIFICIAL ",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "SOLANGE DA SILVA",
      estudantes: "CAIO MARQUES SILVA ", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "07:15-08:45",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: " Lucilia Gomes Ribeiro ",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Gustavo Vinhal",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "CRIPTOGRAFIA E SEGURANÇA DE DADOS: TÉCNICAS PARA GARANTIR A SEGURANÇA DA INFORMAÇÃO",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "SOLANGE DA SILVA",
      estudantes: "LUIS GUILHERME RIBEIRO CAMPOS ", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "09:00-10:30",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Jose Luiz de Freitas Jumior",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Rafael Leal Martins",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "VULNERABILIDADE EM REDES DE COMPUTADORES CORPORATIVAS: ESTUDOS DE CASO SOBRE ATAQUES DE RANSOMWARE ",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "SOLANGE DA SILVA",
      estudantes: "MARCO AURÉLIO SIRQUEIRA DE SÁ ", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "10:45-12:15",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Luiz de Freitas Junior",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Rafael Leal Martins",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Perspectivas da aviação comercial supersônica: uma análise comparativa dos desafios e oportunidades para sua revitalização",
      titulacaoOrientador: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      orientador: "TAMMYSE ARAUJO DA SILVA",
      estudantes: "Daniella Borges Lopes", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "11/12",
      time: "09:00-10:30",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Andréluiz da Silva Fernandes",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "William de Carvalho Xavier",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Abordagem sobre as correntes de jato nas aerovias UZ38 E UM540: desafios para a navegação aérea e o planejamento de voo",
      titulacaoOrientador: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      orientador: "TAMMYSE ARAUJO DA SILVA",
      estudantes: "Lucas Santos Rodrigues de Paula", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "07:15-08:45",
      place: "205D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Anna Paula Bechepeche",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Raul Francé Monteiro",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Desdobramentos financeiros da pandemia: estudo de caso sobre o endividamento da Azul Linhas Aéreas",
      titulacaoOrientador: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      orientador: "TAMMYSE ARAUJO DA SILVA",
      estudantes: "Henrique Ferreira de Oliveira", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "09:00-10:30",
      place: "205D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Paulo José Gonzaga Ribeiro",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Wagno Pereira da Costa",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Viabilidade técnica da semeadura de nuvens como alternativa para minimizar impactos da seca na agricultura do Centro-Oeste",
      titulacaoOrientador: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      orientador: "TAMMYSE ARAUJO DA SILVA",
      estudantes: "Lincoln Baptista Gonzaga Filho", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "10:45-12:15",
      place: "205D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Nagi Hanna Salm Costa",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Marília Ribeiro Rodrigues Paixão",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "A acessibilidade no atendimento para passageiros nos aeroportos: perspectivas do ponto de vista do usuário surdo e da legislação",
      titulacaoOrientador: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      orientador: "TAMMYSE ARAUJO DA SILVA",
      estudantes: "Milena Alves de Oliveira Silva", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "09:00-10:30",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Paulo José Gonzaga Ribeiro",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Ycarim Melgaço Barbosa",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Estudo da incidência de nuvens CBS no Centro-Oeste brasileiro: uma avaliação decenal (2013-2023) a partir das CARTAS SIGWX PROG",
      titulacaoOrientador: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      orientador: "TAMMYSE ARAUJO DA SILVA",
      estudantes: "Volnei Gabriel Zoboli", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "10:45-12:15",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Raul Francé Monteiro",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Andréluiz da Silva Fernandes",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "MÉTODO O EXECUTIVO E ESTUDO DE VIABILIDADE DE PAINÉIS SANDUICHE EM EPS PARA VEDAÇÕES VERTICAIS ",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "TATIANA RENATA PEREIRA JUCA",
      estudantes: "Paulo Augusto Alves Ferraz", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "17:00-18:30",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Cybelle Luiza Barbosa Musse",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Adriane Borges",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Analise comparativa entre alvenaria de bloco cerâmico convencional e racionalizada: estudo de caso",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "TATIANA RENATA PEREIRA JUCA",
      estudantes: "Maria Eduarda Ferreira Lima; Geovanna Campos de Sousa Bastos", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "18:45-20:15",
      place: "206D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Priscilla Borges da F Rodrigues ",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Paulo José Mascarenhas Roeiz",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Análise comparativa de viabilidade técnica e econômica dos sistemas de tratamento de esgoto doméstico convencional e ecofossa",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "VIVIANE VAZ MONTEIRO",
      estudantes: "Daniel Damásio Vieira; Renan Antônio Clemente Pinto ", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "16/12",
      time: "10:45-12:15",
      place: "206D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Marcellus Isaac Lemos Gomes ",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Prof Paulo José Mascarenhas Roriz ",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Um estudo sobre o protocolo Lora com a plataforma ESP32",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "DANIEL CORREA DA SILVA",
      estudantes: "WILLIAN PIRES LIMA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "07:15-08:45",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Olegário Corrêa da Silva Neto",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Eugênio Júlio M. Candido Carvalho",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "BLOCKCHAIN E CONTRATOS INTELIGENTES",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "DANIEL CORREA DA SILVA",
      estudantes: "VALTECI MARCELINO COELHO JÚNIOR", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "09:00-10:30",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Olegário Corrêa da Silva Neto",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Eugênio Júlio M. Candido Carvalho",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "VIGAS DE SEÇÃO RETANGULAR - FLEXÃO PURA - ARMADURA SIMPLES E DUPLA - PLANILHAS PARA O AUTOAPRENDIZADO",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ALBERTO VILELA CHAER",
      estudantes: "FÁBIO DE PAULA NEVES", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "16/12",
      time: "09:00-10:30",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "MANOEL DA SILVA ÁLVARES",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "ELIAS CALIXTO CARRIJO",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "PUNÇÃO EM LAJE LISA – TEORIA E CÁLCULO DE ARMADURA - MATERIAL DIDÁTICO PARA AUTOAPRENDIZADO",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ALBERTO VILELA CHAER",
      estudantes: "LUCAS CASTELO BRANCO DE SOUZA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "16/12",
      time: "10:45-12:15",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "ELIAS CALIXTO CARRIJO",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "MANOEL DA SILVA ÁLVARES",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    
    
  ]
/*
    {
      title: "",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "",
      estudantes: "", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "",
      time: "",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
*/
  
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