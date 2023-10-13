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

        <a href="../../public/assets/EDITAL DE CHAMADA DO HACKA PUC 2023.pdf" download="download">
          <button class="button">Edital</button>
        </a>    
      </div>

      <div class="courses-list" id="cursos" v-if="visibleCursos">
        <div v-for="(props, index) in coursesList" :key="index">
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
          Nesta edição do Hackathon ajudaremos nossos irmãos e irmãs. Doe alimentos 
          não perecíveis ou itens de higiene pessoal e ganhe um botton do HackaPuc 
          como agradecimento. Coleta será realizada no dia 17/10/2023 durante a 
          abertura e no dia 19/10/2023 durante o encerramento no auditório 3 da área 2. 
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
  
  import PhotoHeader from '../components/organization/PhotoHeader.vue'
  import Main from '../components/organization/Main.vue'
  import Paragraph from '@/components/organization/Paragraph.vue'

  import Speakers from '@/components/organization/Speakers.vue'
  import MiniCourse from '../components/miniCourse/index.vue'
  import Programacao from './Programacao.vue'
  import { miniCourses_Section } from '@/models/miniCourses'
  import { Component, Vue, Prop } from 'vue-property-decorator'

  

  @Component({
  components: {
    PhotoHeader,
    Main,
    MiniCourse,
    Paragraph,    
    Programacao
  }
})
export default class MiniCourses extends Vue {  

  //@Prop(String) private title: String = "";
  //@Prop(String) private description: String = "";
  //@Prop(String) private background: String = "assets/img/bannerhackthon.png";

  private visibleCheckpoint = false;
  private visibleMentores = false;
  private visibleCursos = false;
  private visibleGeral = true;
  private filtered_courses = {};
  private coursesList = miniCourses_Section;
  private title = "";
  private description = "";
  private background = "assets/img/bannerhackthon.png";

  constructor() {
    super();

  }

  mostrar_apenas_geral() {

  this.visibleCheckpoint  = false;
  this.visibleMentores    = false;
  this.visibleCursos      = false;
  this.visibleGeral       = true;

  const func = () => {
    const geral = document.getElementById("geral");
    geral.scrollIntoView({behavior: "smooth"})
  }

  setTimeout(func, 100);
  }  


  mostrar_apenas_checkpoint() {
    
    this.visibleMentores    = false;
    this.visibleCursos      = false;
    this.visibleGeral       = false;
    this.visibleCheckpoint  = true;

    const func = () =>{
      const checkpoint = document.getElementById("checkpoint");
      checkpoint.scrollIntoView({behavior: 'smooth'})
    }
    

    setTimeout(func, 100);
  }

  filterCourses() {      
    this.mostrar_apenas_lista_cursos()
    //let data = e.target.innerText
    let filtro = ''
    this.filtered_courses = this.coursesList.map(item => {
      const minicurso = item.minicurso.filter(aux => {
        return aux.date == filtro
      })

      return { ...item, minicurso }
    })

    const func = () => {
      const cursos = document.getElementById("cursos");
      cursos.scrollIntoView({behavior: "smooth"})
    }

    setTimeout(func, 100);

  }

  mostrar_apenas_lista_cursos() {
    this.visibleCheckpoint  = false;
    this.visibleMentores    = false;      
    this.visibleGeral       = false;
    this.visibleCursos      = true;      
  }

  mostrar_apenas_mentores() {

    this.visibleCheckpoint  = false;      
    this.visibleCursos      = false;
    this.visibleGeral       = false;
    this.visibleMentores    = true;

    const func = () => {
      const mentores = document.getElementById("mentores");
      mentores.scrollIntoView({behavior: "smooth"})
    }

    setTimeout(func, 100);

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
  
  margin-top: 0px;
  bottom: 0px;
  visibility: visible;
  margin-bottom: 0px;
}

#mentores hr {
  border: 1px solid #000;
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
  margin-bottom: 0px;
  margin-top: -150px;
  padding-top: 0px;
  bottom: 0px;
  visibility: visible;
}

#checkpoint-element {
  margin-top: 0px;
}

#geral {
  position: relative;
  margin-bottom: 0px;
  visibility: visible;
  bottom: 0px;
  width: 70%;
  margin: 20px auto;
}

#geral h2, h3, h4 {
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


  #mentores {
    bottom: -30px;
  }
  
}

@media screen and (max-width: 371px) {

 

  #body {
    bottom: 3000px;
    padding-top: 0px;
  }

  #mentores {
    margin-top: 200px;
  }

}




@media screen and (max-width: 331px) {  

  #mentores {
    margin-top: 300px;

  }


}

/*

=========================================================================
=========================================================================
=========================================================================
  

                      secao dos mentores




*/
#mentores img {
    width: 150px;
    height: 150px;
    border-radius: 100%;    
}

.mentor {
    display: flex;
    margin: 10px;
    justify-content: space-between;
}

.pessoa-informacao {
    margin: 10px;
    display: flex;
}

.nome-e-descricao {
    margin-left: 10px;
    width: 300px;
    word-wrap: break-word;
    text-align: center;
}

.conteiner-icones {
    display: flex;
    margin-right: 0px;
    margin-top: 5px;
    margin-bottom: 5px;
}

.data-hora {
  display: flex;
}

.item {
    margin: 0px 25px;
    display: flex;
    flex-direction: column;
}

.item i, p {
    text-align: center;
}

.item div {
    width: 100px;
    word-wrap: break-word;
    padding-top: 10px;
    margin-bottom: -10px;

}

@media screen and (max-width: 1100px) {

  #mentores {
      display: flex;
      margin: 10px;
      flex-direction: column;        
  }

  .mentor {
    display: flex;
    flex-direction: column;
  }

  .pessoa-informacao {
    flex-direction: column;
    align-items: center;
  }

  .conteiner-icones {
      display: flex;
      flex-direction: column;
      margin-right: 20px;
      margin-top: 10px;
      margin-bottom: 30px;
  }

  .data-hora {
    margin: 0px auto;
    padding: 0px;
  }

  .item div {
    align-items: center;
    margin-bottom: 5px;
    margin: 0px auto;
    margin-top: 5px;
  }

    
}

@media screen and (max-width: 576px) {

  #mentores h2 {
    text-align: center;
  }


}

@media screen and (max-width: 421px) {

  .data-hora .item {
    margin: 0px
  }


}


</style>




