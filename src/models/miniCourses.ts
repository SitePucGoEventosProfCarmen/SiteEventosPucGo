
let Courses = [
   
  {
    title: "Design Thinking",
    instructor: "Profa. Dra. Genilda da Silva Alexandria Sousa",
    institution: "PUC Goiás",
    desc: ``,
    date: "17/10",
    time: "19:30",
    place: "Presencial: Auditório III Área II",
    //link: ""
  }, 
  {
    title: "Sobre Github",
    instructor: "Não definido",
    institution: "PUC Goiás",
    desc: ``,
    date: "18/10",
    time: "15:00",
    place: 'Não definido.'
  
  /*  link: ""
    */
  },

  {
    title: "Prototipação para Hackathons",
    instructor: 'Prof. Me. Rafael Leal Martins',
    institution: 'PUC Goiás.',
    desc: ``,
    date: '18/10',
    time: '16:00',
    place: 'Microsoft Teams',
    link: ""
  
  },

  {
    title: "Criando Protótipos com Figma",
    instructor: 'Tayna',
    institution: 'PUC Goiás',
    desc: ``,
    date: '18/10',
    time: '17:00',
    place: 'Microsoft Teams',
    link: ""
  
  },
  
  {
    title: "HTML - a crash course",
    instructor: 'Hiagho Junio Gomes Oliveira',
    institution: 'PUC Goiás',
    desc: ``,
    date: '18/10',
    time: '19:30',
    place: 'Microsoft Teams',
    link: ""
  },

  {
    title: "Docker na Prática: Criando e Gerenciando Contêineres " +
           "para Desenvolvimento e Produção",
    instructor: 'Daniel Correa',
    institution: 'PUC Goiás',
    desc: ``,
    date: '19/10',
    time: '09:00',
    place: 'Microsoft Teams',
    link: ""
  },
  
  {
    title: "Pitch - técnicas de uma apresentação campeã",
    instructor: 'Lucilia Gomes Ribeiro',
    institution: 'PUC Goiás',
    desc: ``,
    date: '19/10',
    time: '15:00',
    place: 'Microsoft Teams',
    link: ""
  },

  {
    title: "Exercícios de Relaxamento para um bom Pitch",
    instructor: 'Luri Sabina Cosme da Silva Matos',
    institution: 'PUC Goiás',
    desc: ``,
    date: '19/10',
    time: '17:30',
    place: 'Ainda não definido.',
    //link: ""
  },
]

/*
const Courses_Civil = [
]

const Courses_Computacao = [
  


]

const Courses_Producao = [
  
]

const Courses_Caer = [
  
]

*/
Courses = Courses.sort((a, b) => {
  if(a.date < b.date) return -1;
  if(a.date > b.date) return 1;
  if(a.time < b.time) return -1;
  if(a.time > b.time) return 1;
  if(a.title < b.title) return -1;
  if(a.title > b.title) return 1;
  return 0;
});

export const miniCourses_Section = [
  {
    curso: "Agronomia",
    minicurso: Courses,
  },
  /*
  {
    curso: 'Ciências Aeronáuticas',
    minicurso: Courses_Caer
  },
  {
    curso: "Civil",
    minicurso: Courses_Civil
  },
  {
    curso: "Computacao",
    minicurso: Courses_Computacao
  },
  {
    curso: "Producao",
    minicurso: Courses_Producao
  },
  */
]