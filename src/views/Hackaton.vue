<template>
  <div>
    <PhotoHeader
      :title="title"
      :description="description"
      :image="background"
      offset="calc((-100/523)*100vw + 67.304015296px)"
    ></PhotoHeader>

    <Main id="root">
      <h4 class="text-center"></h4>      
      <div class="button-container">
        <button class="button" v-on:click="mostrar_apenas_geral">Geral</button>
        <button class="button" v-on:click="mostrar_apenas_checkpoint">Checkpoints</button>
        <button class="button" v-on:click="filterCourses">Minicursos</button>
        <button class="button" v-on:click="mostrar_apenas_mentores">Mentores</button>
        <button class="button" v-on:click="">Avaliadores</button>
        <a href="../../public/assets/EDITAL DE CHAMADA DO HACKA PUC 2023.pdf">
          <button class="button">Edital</button>
        </a>
      </div>
      <div class="courses-list" id="cursos" >
        <div v-for="(props, index) in coursesList" :key="index" v-if="flag">
          <!--<h3 class="section-course">{{ props.curso }}</h3> -->
          <div v-for="(course, index) in props.minicurso" :key="index">
            <MiniCourse :course="course"></MiniCourse>
            <hr />
          </div>                    
        </div>
      </div>

      
      <div id="mentores" v-if="visibleMentores">
        <h2>MENTORES</h2>
        <br>
        <br>
        <div class="mentor">          
            <div class="pessoa-informacao">
              <img src="/assets/img/speakers/geraldo_valeriano_ribeiro.jpg" alt="foto mentor" />
              <div class="nome-e-descricao">
                <h4>GERALDO VALERIANO RIBEIRO</h4>
                <p>Engenharia de Dados</p>
              </div>
            </div>

            <div class="conteiner-icones">              
              <div class="data-hora">
                <div class="item">
                  <i class="far fa-calendar-alt fa-3x"></i>
                  <div><p>18/10</p></div>
                </div>

                <div class="item">
                  <i class="far fa-clock fa-3x"></i>
                  <div><p>19:00 - 22:00</p></div>
                </div>
              </div>

                <div class="item local">
                  <i class="fas fa-map-marker-alt fa-3x"></i>
                  <div><p>Online: Teams</p></div>
                </div>
            
            </div>
        </div>
        <hr>
        <div class="mentor">
            <div class="pessoa-informacao">
              <img src="/assets/img/speakers/andre_luiz_alvez.jpg" alt="foto mentor" />
              <div class="nome-e-descricao">
                <h4>ANDRÉ LUIZ ALVEZ</h4>
                <p>Engenharia de software</p>
              </div>
            </div>

            <div class="conteiner-icones">
              <div class="data-hora">
                <div class="item">
                  <i class="far fa-calendar-alt fa-3x"></i>
                  <div><p>18/10</p></div>
                  <div><p>19/10</p></div>
                </div>

                <div class="item">
                  <i class="far fa-clock fa-3x"></i>
                  <div><p>09:00 - 11:00</p></div>
                  <div><p>09:00 - 11:00</p></div>
                </div>
              </div>

              <div class="item local">
                <i class="fas fa-map-marker-alt fa-3x"></i>
                <div><p>Online: Teams</p></div>
              </div>
            </div>
        </div>
        <hr>
      </div>
      
    </Main>    




    <div id="geral" v-if="visibleGeral">
        <h2>Hackapuc 2023</h2>
        <hr style="border-top: 3px solid #333; margin: 20px auto;">
        <p style="font-size: 18px;">
          Temos a alegria de anunciar a Hackapuc 2023, que será realizada 
          de 17 a 19 de outubro. A Hackapuc é um grande evento que envolve 
          o desenvolvimento de uma solução inovadora para um determinado 
          problema ou desafio. Os interessados devem formar grupos para 
          participarem.
        </p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h3 style="text-align: left;">Campanha de Arrecadação</h3>
        <hr style="border-top: 3px solid #333; margin: 20px auto;">
        <p style="text-align: left; font-size: 18px;">
          Nesta edição do Hackathon ajudaremos nossos irmãos e irmãs. 
          Doe alimentos não perecíveis ou itens de higiene pessoal e 
          ganhe um botton do HackaPuc como agradecimento. 
          Coleta será realizada no dia 17/10/2023 durante a abertura e 
          no dia 19/10/2023 durante o encerramento no auditório 3 da área 2. 
          Contamos com sua ajuda!!!!
        </p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>      
        <h3 style="text-align: left;">Inscrições</h3>
        <hr style="border-top: 3px solid #333; margin: 20px auto;">
        <p style="text-align: left; font-size: 18px;">
          As incrições podem ser feitas gratuitamente no dia 17/09 às 18:30, na 
          abertura da Hackapuc. Os interessados devem formar grupos 
          e efetuar as incrições por meio de um formulário que será 
          disponibilizado.
        </p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>      
        <h3 style="text-align: left;">Como Funciona</h3>
        <hr style="border-top: 3px solid #333; margin: 20px auto;">
        <p style="text-align: left; font-size: 18px;">
          A abertura da Hackathon será no dia 17/10. Nesse dia, o tema 
          do desafio será revelado. As equipes devem trabalhar para 
          poderem cumprir os checkpoints. Cada checkpoint representa 
          um marco no hackathon em que as equipes devem apresentar 
          os trabalhos solicitados dentro de um prazo. Os checkpoints 
          são de caráter eliminatório, isso significa que a cada 
          checkpoint menos equipes vão estar na disputa. Os resultados 
          serão avaliados pela banca examinadora e publicados no site.     
        </p>
    </div>

    
    <div id="checkpoint" v-if="visibleCheckpoint">
        <Programacao id="checkpoint-element"></Programacao>
    </div>
  </div>

    
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import PhotoHeader from '../components/organization/PhotoHeader.vue'
import Main from '../components/organization/Main.vue'
import Paragraph from '@/components/organization/Paragraph.vue'
import Speakers from '@/components/organization/Speakers.vue'
import MiniCourse from '../components/miniCourse/index.vue'



import { miniCourses_Section } from '@/models/miniCourses'
import Programacao from './Programacao.vue'

@Component({
  components: {
    PhotoHeader,
    Main,
    MiniCourse,
    Paragraph,
    Speakers,
    Programacao
  }
})
export default class MiniCourses extends Vue {
  private speakers: any = null
  private coursesList: any
  private filtered_courses: any

  private title = ''
  private description = ''
  private background = 'assets/img/bannerhackthon.png'
  
  
  //variáveis de estados:
  private visibleCheckpoint = false;
  private visibleMentores = false;
  private visibleCursos = false;
  private visibleGeral = true;

  public flag = false;

  ocultar_mentores() {
    const mentores = document.getElementById("mentores");
    mentores.style.visibility = "hidden"

    this.visibleMentores = false;
  }

  ocultar_lista_cursos() {
    const cursos = document.getElementById("cursos")
    cursos.style.visibility = "hidden"
    cursos.style.height = "0px";
    cursos.style.marginBottom = "0px";

    this.visibleCursos = false;
  }

  ocultar_checkpoint() {
    const checkpoint = document.getElementById("checkpoint")
    checkpoint.style.visibility = "hidden";

    this.visibleCheckpoint = false;

  }

  ocultar_geral() {
    const geral = document.getElementById("geral")
    geral.style.visibility = "hidden";

    this.visibleGeral = false;
  }



  mostrar_apenas_mentores() {
    
    if (this.visibleMentores) return

    if (this.visibleCheckpoint)
      this.ocultar_checkpoint()

    if (this.visibleCursos)
      this.ocultar_lista_cursos()

    if (this.visibleGeral)      
      this.ocultar_geral();

    const mentores = document.getElementById("mentores");
    mentores.style.visibility = "visible"
    
    this.visibleMentores = true;
    mentores.scrollIntoView({behavior:"smooth"})
  }

  mostrar_apenas_lista_cursos() {
    
    if (this.visibleCursos) return

    if (this.visibleCheckpoint)
      this.ocultar_checkpoint()

    if (this.visibleMentores)
      this.ocultar_mentores()

    if (this.visibleGeral)      
      this.ocultar_geral();

    const cursos = document.getElementById("cursos")
    cursos.style.visibility = "visible"

    this.visibleCursos = true;
  }


  mostrar_apenas_checkpoint() {

    if (this.visibleCheckpoint) return

    if (this.visibleCursos)
      this.ocultar_lista_cursos()

    if (this.visibleMentores)
      this.ocultar_mentores()

    if (this.visibleGeral)      
      this.ocultar_geral();

    const checkpoint = document.getElementById("checkpoint")
    checkpoint.style.visibility = "visible"

    this.visibleCheckpoint = true;
    checkpoint.scrollIntoView({behavior: 'smooth'});
  }

  mostrar_apenas_geral() {
    if (this.visibleGeral) return

    if (this.visibleCursos)
      this.ocultar_lista_cursos()

    if (this.visibleMentores)
      this.ocultar_mentores()

    if (this.visibleCheckpoint)      
      this.ocultar_checkpoint();

    const geral = document.getElementById("geral")
    geral.style.visibility = "visible"

    this.visibleGeral = true;

    geral.scrollIntoView({behavior: 'smooth'});
  }


  filterCourses(e: any) {
    this.flag = true;
    this.mostrar_apenas_lista_cursos()
    //let data = e.target.innerText
    let filtro = ''
    this.filtered_courses = this.coursesList.map(item => {
      const minicurso = item.minicurso.filter(aux => {
        return aux.date == filtro
      })

      return { ...item, minicurso }
    })

    const cursos = document.getElementById("cursos");
    cursos.scrollIntoView({behavior: "smooth"})
  }

  clearFilter() {
    this.mostrar_apenas_lista_cursos()
    this.filtered_courses = this.coursesList
  }

  constructor() {
    super()    
    this.speakers = [
      
      {
        name: 'André Luiz Alvez',
        institution: '',
        speaking: 'Engenharia de software',
        description: '',
        subjectResume: '',
        img: '/assets/img/speakers/andre_luiz_alvez.jpg',
        customSize: '100%',
        datentime: {
          date: '18/10',
          date2: '19/10',
          time: '09:00 - 11:00',
          time2: '09:00 - 11:00',
          place: 'Teams ou Incubadora da PUC Goiás'
        }
      },

      {
        name: 'Lucília Gomes Ribeiro',
        institution: '',
        speaking: '',
        description: '',
        subjectResume: '',
        img: '/assets/img/speakers/lucilia_gomes_ribeiro.jpg',
        customSize: '100%',
        datentime: {
          date: '18/10',
          date2: '19/10',
          time: '14:00 - 17:00',
          time2: '14:00 - 17:00',
          place: 'Online: Teams'
        }
      },

      {
        name: 'Geraldo Valeriano Ribeiro',
        institution: '',
        speaking: 'Engenharia de Dados',
        description: '',
        subjectResume: '',
        img: '/assets/img/speakers/geraldo_valeriano_ribeiro.jpg',
        customSize: '100%',
        datentime: {
          date: '18/10',          
          time: '19:00 - 22:00',        
          place: 'Online: Teams'
        }
      },

      {
        name: 'Fernando Gonçalves Abadia',
        institution: '',
        speaking: '',
        description: '',
        subjectResume: '',
        img: '/assets/img/speakers/fernando_goncalves_abadia.jpg',
        customSize: '100%',
        datentime: {
          date: '18/10',
          date2: '19/10',
          time: '09:00 - 12:15',
          time2: '09:00 - 12:15',
          place: 'Teams ou Incubadora da PUC Goiás'
        }
      },

      {
        name: 'Angelica da Silva Nunes',
        institution: '',
        speaking: 'Marketing',
        description: '',
        subjectResume: '',
        img: '/assets/img/speakers/angelica_da_silva_nunes.jpg',
        customSize: '100%',
        datentime: {
          date: '18/10',
          time: '09:00 - 11:00',
          place: 'Online: Teams'
        }
      },

      {
        name: 'Fabricio Schlag',
        institution: '',
        speaking: 'Engenharia de software',
        description: '',
        subjectResume: '',        
        customSize: '100%',
        datentime: {
          date: '18/10',
          date2: '19/10',
          time: '09:00 - 11:00',
          time2: '09:00 - 11:00',
          place: 'Online: Teams'
        }
      },

      {
        name: 'Max Gontijo de Oliveira',
        institution: '',
        speaking: '',
        description: '',
        subjectResume: '',        
        customSize: '100%',
        datentime: {
          date: '',
          time: '',          
          place: ''
        }
      },

      {
        name: 'Daniel Correa da Silva',
        institution: '',
        speaking: '',
        description: '',
        subjectResume: '',        
        customSize: '100%',
        datentime: {
          date: '',
          time: '',          
          place: ''
        }
      }


    ]
        
    this.coursesList = miniCourses_Section
    this.filtered_courses = this.coursesList
  }
}
</script>

<style scoped>
.courses-list > div:not(:first-child) {
  margin-top: 35px;
}

.section-course {
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  background-color: whitesmoke;
  box-shadow: 0 0.46875rem 2.1875rem rgba(0, 0, 0, 0.03),
    0 0.9375rem 1.40625rem rgba(0, 0, 0, 0.03),
    0 0.25rem 0.53125rem rgba(0, 0, 0, 0.05),
    0 0.125rem 0.1875rem rgba(0, 0, 0, 0.03);
  padding: 1rem;
}
.button-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 5rem;
}

.button {
  padding: 1rem;
  border: 0.1rem solid white;
  border-radius: 5rem;
  font-weight: 700;
  background-color: #006ca3;
  margin-right: 2rem;
  color: white;
  transition: all 0.2s ease-in-out;
}

.button:hover {
  background-color: #20407d;
  transform: background-color;
  transform: scale(1.1);
}

.button:focus {
  background-color: #20407d;
  transform: background-color;
  transform: scale(1.1);
}

@media screen and (max-width: 576px) {
  .button-container {
    flex-direction: column;
  }
  .button {
    margin-bottom: 1rem;
  }

  #checkpoint {
    bottom: 2600px;
  }

  #root {
    margin-bottom: 0px;
  }

  #body {
    top: 0.9%;
    margin-top: 0px;
  }
}

@media screen and (min-width: 800px) {
  .button {
    width: 10.5rem;
  }
}

h4 {
  color: black;
  margin-bottom: 3rem;
}


#mentores {
  position: relative;
  margin-top: "-600px";
  bottom: 100px;
  visibility: hidden;
  margin-bottom: 0px;
}

#root {
  position: relative;
  margin-bottom: 0px;
  
}

#body {
  padding-top: 0px;  
}

#cursos {
  position: relative;
  margin-bottom: 0px;  
}

#checkpoint {
  position: relative;
  margin-bottom: -1200px;
  padding-top: 0px;
  bottom: 1430px;
  visibility: hidden;
}

#checkpoint-element {
  margin-top: 0px;
}

#geral {
  position: relative;
  margin-bottom: 0px;
  visibility: visible;
  bottom: 600px;
  width: 70%;
  margin: 20px auto;
}

#geral h2, h3 {
  color: #2776f5;
}

@media screen and (max-width: 576px) {

}

@media screen and (max-width: 532px) {

  #body {
    bottom: 1000px;
  }

  #root {
    margin-bottom: -100px;
  }

  #mentores {
    bottom: 50px;
  }
  
}

@media screen and (max-width: 471px) {

  #root {
    margin-bottom: -200px;
  }

  #mentores {
    bottom: -30px;
  }

  #geral {
    bottom: 520px;
  }
}

@media screen and (max-width: 371px) {

  #root {
    margin-bottom: -400px;
  }

  #body {
    bottom: 3000px;
    padding-top: 0px;
  }

  #mentores {
    margin-top: 200px;
  }

}

@media screen and (max-width: 1095px) {

  #checkpoint {
    bottom: 1550px;
  }
}

@media screen and (max-width: 710px) {

  #checkpoint {
    bottom: 1710px;
  }
}

@media screen and (max-width: 650px) {

  #checkpoint {
    bottom: 1760px;
  }
}

@media screen and (max-width: 331px) {

  #root {
    margin-bottom: -500px;
  }

  #mentores {
    margin-top: 300px;

  }


}




</style>




